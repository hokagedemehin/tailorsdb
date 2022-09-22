import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
// import { useDidUpdate } from 'rooks';
import useSWR from 'swr';

export const GlobalContextData = createContext();

export default function GlobalContext({ children }) {
  const [cookies] = useCookies(['tailors-db']);
  const [userInfo, setUserInfo] = useState(null);
  const [verifyInfo, setVerifyInfo] = useState(null);

  console.log('cookies', cookies['tailors-db']);
  console.log('userInfo', userInfo);

  const profileFetcher = (url) =>
    axios
      .get(url, {
        headers: {
          Authorization: `Token ${cookies['tailors-db']}`,
        },
      })
      .then((res) => res.data);

  const verifiedProfile = (url) => axios.get(url).then((res) => res.data[0]);

  const { data: userProfile } = useSWR(
    cookies['tailors-db']
      ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/dj-rest-auth/user/`
      : null,
    profileFetcher
  );

  const { data: verifyProfile } = useSWR(
    cookies['tailors-db'] && userProfile
      ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/users?email=${userProfile?.email}`
      : null,
    verifiedProfile
  );

  console.log('swr data :>> ', userProfile);
  // console.log('swr error :>> ', error);

  useEffect(() => {
    if (cookies['tailors-db']) {
      const getUserData = async () => {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/dj-rest-auth/user/`,
          {
            headers: {
              Authorization: `Token ${cookies['tailors-db']}`,
            },
          }
        );

        const info = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/users?email=${data?.email}`
        );
        // console.log(verifyInfo);
        setUserInfo(data);
        setVerifyInfo(info?.data[0]?.verified);
        // console.log('data', data);
      };
      getUserData();
    } else {
      // console.log('there is no cookie');
      setUserInfo(null);
    }
  }, [cookies]);

  return (
    <GlobalContextData.Provider
      value={{
        userProfile,
        verifyProfile,
        userInfo,
        verifyInfo,
        setVerifyInfo,
      }}
    >
      {children}
    </GlobalContextData.Provider>
  );
}

export const useContextData = () => useContext(GlobalContextData);
