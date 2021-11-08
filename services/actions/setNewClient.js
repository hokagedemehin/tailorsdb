// import { useContext } from "react";

import { db } from "../firebase/firebase";
// import { useUser, UserContext } from "../context/userContext";
import {
  collection,
  addDoc,
  setDoc,
  getDoc,
  doc,
  updateDoc,
  arrayUnion,
  serverTimestamp,
  increment,
} from "firebase/firestore";
import { SetImageClient } from "./setImageClient";

export const SetNewClient = async (formValue, userDoc, user, imgValue) => {
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
    createdTimestamp: serverTimestamp(),
    ...formValue,
  });
  await setDoc(doc(db, email, docRef.id), { id: docRef.id }, { merge: true });
  // setNewDocID({ id: docRef.id });
  // await setFormValue({ ...formValue, id: docRef.id });
  if (imgValue?.photo) {
    // console.log(formValue);
    // console.log(imgValue);
    const newName = await getDoc(doc(db, email, docRef.id));
    const imageDoc = { id: docRef.id, fullName: newName.data().fullName };
    await SetImageClient(imgValue, imageDoc, user);
    // EditImageTailorProfile(imgValue, user);
  }

  const tailorRef = doc(db, "tailors", uid);
  await updateDoc(tailorRef, {
    clients: arrayUnion(docRef.id),
    clientsCount: increment(1),
    newClientTimestamp: serverTimestamp(),
  });
};
