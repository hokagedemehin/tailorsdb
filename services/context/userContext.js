import { useState, useEffect, createContext, useContext } from "react";
import { auth, db, app } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import {
  useDocument,
  useDocumentData,
  useAuthState,
} from "react-firebase-hooks/firestore";
// import { useAuthState } from "react-firebase-hooks/auth";

export const UserContext = createContext();

export default function UserContextComp({ children }) {
  const [user, setUser] = useState(null);
  const [userDoc, setUserDoc] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  let userDocs = "";
  console.log("user: ", user);
  // console.log("user uid: ", user?.uid);
  // const db1 = getFirestore(app, "tailors", "8ZiT7YHKNcUEeUCFMACgTH6lwCp2");
  // console.log(db1);
  // // console.log(doc(db1));
  // if (user && user.uid) {
  //   console.log(doc(db, "tailors", user?.uid));
  //   console.log(getDoc(doc(db, "tailors", user?.uid)));
  // }
  // const [userr, loading, error] = useAuthState(auth);
  // console.log(userr);
  // const [value, load, err] = useDocument(
  //   doc(getFirestore(app, "tailors", "8ZiT7YHKNcUEeUCFMACgTH6lwCp2")),
  //   {
  //     snapshotListenOptions: { includeMetadataChanges: true },
  //   }
  // );
  // const [value, load, err] = useDocument(
  //   doc(db, "tailors", "8ZiT7YHKNcUEeUCFMACgTH6lwCp2"),
  //   {
  //     snapshotListenOptions: { includeMetadataChanges: true },
  //   }
  // );
  // const [value, load, err] = user
  //   ? useDocument(doc(db, "tailors", user.uid), {
  //       snapshotListenOptions: { includeMetadataChanges: true },
  //     })
  //   : "";
  // console.log(value);

  // const [value, load, err] = useDocumentData(doc(db, "tailors", userr.uid), {
  //   snapshotListenOptions: { includeMetadataChanges: true },
  // });
  // console.log(value);

  // if (user && user.uid) {
  //   const [value, load, err] = useDocumentData(
  //     doc(db, "tailors", "8ZiT7YHKNcUEeUCFMACgTH6lwCp2"),
  //     {
  //       snapshotListenOptions: { includeMetadataChanges: true },
  //     }
  //   );
  //   console.log(value);
  // }

  // const auth1 = getAuth();
  useEffect(() => {
    const authSub = onAuthStateChanged(auth, async (user) => {
      try {
        // console.log(auth.currentUser);
        if (user) {
          // console.log(user);
          const { uid, displayName, email, photoUrl } = user;
          // console.log(uid, email);
          userDocs = await getDoc(doc(db, "tailors", uid));

          setUser({ uid, displayName, email, photoUrl });
          // setUserDoc({ value, loading, error });
          console.log("userDocs: ", userDocs.data());
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
    <UserContext.Provider
      value={{ user, setUser, loadingUser, userDocs, userDoc }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
