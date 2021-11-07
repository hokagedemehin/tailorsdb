import { auth, db } from "../firebase/firebase";
// import { useUser } from "../context/userContext";
import { doc, setDoc } from "firebase/firestore";
import {
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithPopup,
} from "firebase/auth";

export const SetNewGoogleTailor = async () => {
  // TODO: create a firestore document with the firstname, lastname, email and Password
  // console.log(uid, displayName, email);
  const provider = new GoogleAuthProvider();
  await signInWithRedirect(auth, provider);

  // const result = await signInWithPopup(auth, provider);
  // try {
  const result = await getRedirectResult(auth);
  console.log(result.user);
  const { uid, displayName, email } = result.user;
  const docRef = doc(db, "tailors", uid);
  const names = displayName.split(" ");
  await setDoc(
    docRef,
    {
      firstName: names[0],
      lastName: names[1],
      email: email,
      clients: [],
      clientsCount: 0,
    },
    { merge: true }
  );
  // } catch (error) {
  //   console.error(error);
  // }
};
