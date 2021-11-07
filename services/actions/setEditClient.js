// import { useContext } from "react";

import { db } from "../firebase/firebase";
// import { useUser, UserContext } from "../context/userContext";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";

export const SetEditClient = async (formValue, userDoc) => {
  const { email } = userDoc;
  const id = formValue?.id;

  await setDoc(
    doc(db, email, id),
    {
      timestamp: serverTimestamp(),
      ...formValue,
    },
    { merge: true }
  );
};
