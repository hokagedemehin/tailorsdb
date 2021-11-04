import { auth, db } from "../firebase/firebase";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";

export const getTailorData = async (uid) => {
  // const oneTailor = await db.collection
  const [value, loading, error] = useDocument(doc(db, "tailors", uid), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
};
