import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useUser } from "../context/userContext";

export const GetAllClients = async () => {
  // TODO: read the firestore database and get all the clients under this tailors uid
  // console.log("user");
  const { userDoc } = useUser;
  // console.log("userdoc", userDoc);
  const result = [];
  if (userDoc) {
    const clientListRef = collection(db, userDoc.firstName);
    const allDocs = await getDocs(clientListRef);
    allDocs.forEach((doc) => {
      result.push(doc.data());
    });
    // console.log(result);
  }
  return result;
};
