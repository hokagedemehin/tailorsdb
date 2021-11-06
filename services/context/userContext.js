import { useState, useEffect, createContext, useContext } from "react";
import { auth, db, app } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
// import {
//   useDocument,
//   useDocumentData,
//   useAuthState,
// } from "react-firebase-hooks/firestore";
// import { useAuthState } from "react-firebase-hooks/auth";

export const UserContext = createContext();

export default function UserContextComp({ children }) {
  const [user, setUser] = useState(null);
  const [userDoc, setUserDoc] = useState(null);
  const [allDocs, setAllDocs] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  useEffect(() => {
    const authSub = onAuthStateChanged(auth, async (user) => {
      try {
        // console.log(auth.currentUser);
        if (user) {
          // console.log(user);
          const { uid, displayName, email, photoUrl } = user;
          // console.log(uid, email);

          setUser({ uid, displayName, email, photoUrl });

          onSnapshot(doc(db, "tailors", uid), (doc) => {
            setUserDoc(doc.data());
          });

          const clientListRef = collection(db, email);
          onSnapshot(clientListRef, (alldoc) => {
            const result = [];

            alldoc.forEach((doc) => {
              result.push(doc.data());
            });
            setAllDocs(result);
          });
          // const allDocs = await getDocs(clientListRef);
          // allDocs.forEach((doc) => {
          //   result.push(doc.data());
          // });

          // console.log(result);

          // userDoc = await getDoc(doc(db, "tailors", uid));
          // setUserDoc(userDoc.data());
        } else setUser(null);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingUser(false);
      }
    });
    return () => authSub();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, userDoc, allDocs }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
