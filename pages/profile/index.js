import React, { useEffect } from "react";
import Layout from "../../components/layout/layout";
import { useRouter } from "next/router";
import { useUser } from "../../services/context/userContext";
import TailorsProfileComponent from "../../components/tailors/tailors.profile.component";
import TailorsLoadingProfileComponent from "../../components/tailors/tailors.loading.profile.component";

const ProfilePage = () => {
  const router = useRouter();
  const { user, userDoc } = useUser();
  // console.log(user);
  // useEffect(() => {
  //   if (!user) {
  //     router.push("/");
  //   }
  // }, [user]);

  return (
    <Layout
      name="Profile Page"
      desc="Every Tailor Profile details can be found here"
    >
      {!user ? (
        <TailorsLoadingProfileComponent />
      ) : (
        <TailorsProfileComponent userDoc={userDoc} />
      )}
      {/* {!user ? (
        <TailorsLoadingProfileComponent />
      ) : (
        <TailorsLoadingProfileComponent />
      )} */}
    </Layout>
  );
};

// export const getServerSideProps = () => {
//   const { user, userDoc } = useUser();

//   if (!user) {
//     return { notFound: true };
//   }
//   return { props: { userDoc } };
// };

// export async function getStaticProps() {
//   const { user, userDoc } = useUser();

//   if (!user) {
//     return { notFound: true };
//   }
//   return { props: { userDoc } };
// }

export default ProfilePage;
