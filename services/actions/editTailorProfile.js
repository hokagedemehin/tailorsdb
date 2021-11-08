// import React from "react";
import { db } from "../firebase/firebase";
// import { useUser, UserContext } from "../context/userContext";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
export const EditTailorProfile = async (formValue, user) => {
  const { uid } = !user ? {} : user;

  try {
    const docRef = doc(db, "tailors", uid);

    await setDoc(
      docRef,
      {
        ...formValue,
        edittedTimestamp: serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error(error);
  }
};
