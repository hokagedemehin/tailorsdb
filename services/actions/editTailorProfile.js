// import React from "react";
import { db } from "../firebase/firebase";
// import { useUser, UserContext } from "../context/userContext";
import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
export const EditTailorProfile = (formValue, user) => {
  const { uid } = !user ? {} : user;

  try {
    const docRef = doc(db, "tailors", uid);

    await updateDoc(docRef, {
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      edittedTimestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error(error);
  }
};
