import { auth, db } from "../firebase/firebase";
// import { useUser } from "../context/userContext";
import { doc, setDoc } from "firebase/firestore";
import {
  signInWithRedirect,
  GithubAuthProvider,
  getRedirectResult,
  // signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SetNewGithubTailor = () => {
  // TODO: create a firestore document with the firstname, lastname, email and Password
  // console.log(uid, displayName, email);

  // const result = await signInWithPopup(auth, provider);
  // try {
  const provider = new GithubAuthProvider();
  signInWithRedirect(auth, provider);
  // const result = getRedirectResult(auth);
  console.log(result.user);
  getRedirectResult(auth)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      if (credential) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const token = credential.accessToken;
        // ...
      }

      // The signed-in user info.
      const user = result.user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });
  // const { uid, displayName, email } = result.user;
  // const docRef = doc(db, "tailors", uid);
  // const names = displayName.split(" ");
  // await setDoc(
  //   docRef,
  //   {
  //     firstName: names[0],
  //     lastName: names[1],
  //     email: email,
  //     clients: [],
  //     clientsCount: 0,
  //   },
  //   { merge: true }
  // );
  // } catch (error) {
  //   console.error(error);
  //   toast.error(`🚨 ${error.message}🚨`);
  // }
};
