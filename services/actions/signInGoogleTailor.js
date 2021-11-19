import { auth, db } from "../firebase/firebase";
// import { useUser } from "../context/userContext";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import {
  // signInWithRedirect,
  GoogleAuthProvider,
  // getRedirectResult,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SingInGoogleTailor = async () => {
  // TODO: create a firestore document with the firstname, lastname, email and Password
  // console.log(uid, displayName, email);

  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const { uid, displayName, email } = result.user;
    const docRef = doc(db, "tailors", uid);

    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      // console.log("data: ", docSnap.data());
      const names = displayName.split(" ");
      await setDoc(
        docRef,
        {
          firstName: names[0],
          lastName: names[1],
          email: email,
          clients: [],
          clientsCount: 0,
          image:
            "https://avatars.dicebear.com/api/micah/:child.svg?mouth[]=laughing&mouth[]=smile&glassesProbability=100",
          createdTimestamp: serverTimestamp(),
        },
        { merge: true }
      );
    }
    // const result = await signInWithPopup(auth, provider);
    // await signInWithRedirect(auth, provider);
    // const result = await getRedirectResult(auth);
    // console.log(result.user);

    // const { uid, displayName, email } = result.user;
    // const docRef = doc(db, "tailors", uid);
    // const existDoc = await getDoc(docRef);
    // console.log(existDoc);
    // if (!existDoc) {
    //   const names = displayName.split(" ");
    //   await setDoc(
    //     docRef,
    //     {
    //       firstName: names[0],
    //       lastName: names[1],
    //       email: email,
    //       clients: [],
    //       clientsCount: 0,
    //       image:
    //         "https://avatars.dicebear.com/api/micah/:child.svg?mouth[]=laughing&mouth[]=smile&glassesProbability=100",
    //       createdTimestamp: serverTimestamp(),
    //     },
    //     { merge: true }
    //   );
    // }
    // toast.success(`🚨 ${result.user}🚨`);
  } catch (error) {
    console.error(error);
    toast.error(`🚨 ${error.message}🚨`);
  }
};
