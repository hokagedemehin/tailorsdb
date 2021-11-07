// import { useContext } from "react";

import { db } from "../firebase/firebase";
// import { useUser, UserContext } from "../context/userContext";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  updateDoc,
  arrayUnion,
  serverTimestamp,
  increment,
} from "firebase/firestore";

export const SetNewClient = async (formValue, userDoc, user) => {
  // const { userDoc, user } = useUser();
  // const cont = useContext(UserContext);
  // const { userDoc, user } = cont;
  // console.log(user, userDoc);
  const { email } = userDoc;
  const { uid } = user;

  const genderCheck = !formValue?.gender
    ? "https://avatars.dicebear.com/api/micah/:child.svg?mouth[]=laughing&mouth[]=smile"
    : formValue?.gender === "male"
    ? "https://avatars.dicebear.com/api/micah/:man.svg?mouth[]=laughing&mouth[]=smile"
    : "https://avatars.dicebear.com/api/micah/:woman.svg?mouth[]=laughing&mouth[]=smile";

  const docRef = await addDoc(collection(db, email), {
    tailorID: uid,
    // image: "https://doodleipsum.com/500/avatar-3?shape=circle&bg=ceebff",
    image: genderCheck,
    timestamp: serverTimestamp(),
    ...formValue,
  });
  await setDoc(doc(db, email, docRef.id), { id: docRef.id }, { merge: true });

  const tailorRef = doc(db, "tailors", uid);
  await updateDoc(tailorRef, {
    clients: arrayUnion(docRef.id),
    clientsCount: increment(1),
    newClientTimestamp: serverTimestamp(),
  });
};
