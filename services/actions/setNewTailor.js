import { auth, db } from "../firebase/firebase";
// import { useUser } from "../context/userContext";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SetNewTailor = async (formValue) => {
  // const email1 = formValue.email;
  // const password = formValue.password;

  // TODO: create a firestore document with the firstname, lastname, email and Password
  const firstName = formValue.firstName;
  const lastName = formValue.lastName;
  // console.log(formValue);
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      formValue.email,
      formValue.password
    );
    // console.log(response);

    const { uid, email } = response.user;

    const docRef = doc(db, "tailors", uid);

    await setDoc(
      docRef,
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        clients: [],
        clientsCount: 0,
        image:
          "https://avatars.dicebear.com/api/micah/:child.svg?mouth[]=laughing&mouth[]=smile&glassesProbability=100",
        createdTimestamp: serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error(error);
    toast.error("💥Something is wrong 😪😥💥");
  }
};
