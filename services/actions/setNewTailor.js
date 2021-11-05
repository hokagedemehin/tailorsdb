import { auth, db } from "../firebase/firebase";
// import { useUser } from "../context/userContext";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const setNewTailor = async (formValue) => {
  // const email1 = formValue.email;
  // const password = formValue.password;
  const firstName = formValue.firstName;
  const lastName = formValue.lastName;
  console.log(formValue);
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      formValue.email,
      formValue.password
    );
    console.log(response);

    const { uid, email } = response.user;

    const docRef = doc(db, "tailors", uid);

    await setDoc(
      docRef,
      { firstName: firstName, lastName: lastName, email: email },
      { merge: true }
    );
  } catch (error) {
    console.error(error);
  }
};
