import { auth, db } from "../firebase/firebase";
// import { useUser } from "../context/userContext";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const setNewTailor = async (formValue) => {
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
      },
      { merge: true }
    );
  } catch (error) {
    console.error(error);
  }
};
