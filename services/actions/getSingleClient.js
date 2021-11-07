// import React from 'react'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const GetSingleClient = async (id, allDocs) => {
  // const tailorRef = doc(db, "tailors", tailorID);
  // const tailorDoc = await getDoc(tailorRef);

  // const { email } = tailorDoc.data();

  // const clientRef = doc(db, email, id);
  // const clientDoc = await getDoc(clientRef);

  // if (!clientDoc.exists) {
  //   return null;
  // }
  // return clientDoc.data();

  // const clientDetail = {};
  // if (allDocs) {
  const clientDetail = allDocs.filter((val) => {
    if (val.id.includes(id)) {
      return val;
    }
  });
  // }
  // const clientDetail = allDocs.filter((val) => {
  //   if (val.id.includes(id)) {
  //     return val;
  //   }
  // });

  console.log(clientDetail);

  return clientDetail;
};
