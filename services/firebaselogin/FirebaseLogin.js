import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const loginUser = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};
