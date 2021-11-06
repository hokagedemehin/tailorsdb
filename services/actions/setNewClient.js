import { useContext } from "react";

import { db } from "../firebase/firebase";
// import { useUser, UserContext } from "../context/userContext";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  arrayUnion,
  serverTimestamp,
  increment,
} from "firebase/firestore";

export const setNewClient = async (formValue, userDoc, user) => {
  // const { userDoc, user } = useUser();
  // const cont = useContext(UserContext);
  // const { userDoc, user } = cont;
  // console.log(user, userDoc);
  const { email } = userDoc;
  const { uid } = user;

  const docRef = await addDoc(collection(db, email), {
    tailorID: uid,
    image: "https://doodleipsum.com/500/avatar-3?shape=circle&bg=ceebff",
    timestamp: serverTimestamp(),
    ...formValue,
  });

  const tailorRef = doc(db, "tailors", uid);
  await updateDoc(tailorRef, {
    clients: arrayUnion(docRef.id),
    clientsCount: increment(1),
    timestamp: serverTimestamp(),
  });
};
