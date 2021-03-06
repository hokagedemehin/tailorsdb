import { db, storage } from "../firebase/firebase";
// import { useUser, UserContext } from "../context/userContext";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SetImageNewClient = async (imgValue, formValue, user) => {
  const { uid, email } = user;
  // console.log(formValue);
  const id = formValue?.id;
  // const resizedURL = "";
  try {
    const docRef = doc(db, email, id);
    const storageRef = ref(
      storage,
      `clients/${email}/${formValue?.fullName}/${imgValue?.photo?.name}`
    );
    const uploadTask = uploadBytesResumable(storageRef, imgValue?.photo);

    uploadTask.on(
      "state_change",
      (snapshot) => {
        // try {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        // } catch (error) {
        //   console.error(error);
        // }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            toast.error(
              "💥You don't have permission to access this file 😪😥💥"
            );

            break;
          case "storage/canceled":
            // User canceled the upload
            toast.error("💥Operation cancelled by user 😪😥💥");

            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            toast.error("💥Unknown error while uploading file 😪😥💥");

            break;
        }
      },
      async () => {
        // Upload completed successfully, now we can get the download URL
        // const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

        // .then((downloadURL) => {
        // console.log("File available at", downloadURL);
        // });
        // gs://tailorsdb.appspot.com/clients/ibk2k7@gmail.com/Lysandra Mullins/cropped-oau-logo_400x400.png
        function resizedName(fileName, dimensions = "400x400") {
          const extIndex = fileName.lastIndexOf(".");
          const ext = fileName.substring(extIndex);
          return `gs://tailorsdb.appspot.com/clients/${email}/${
            formValue?.fullName
          }/${fileName.substring(0, extIndex)}_${dimensions}${ext}`;
        }

        // console.log(resizedNewName(downloadURL));
        const resizedURL = resizedName(downloadURL);
        const compImg = ref(storage, resizedURL);
        const compImgName = await getDownloadURL(compImg);
        await setDoc(
          docRef,
          {
            image: compImgName,
            edittedTimestamp: serverTimestamp(),
          },
          { merge: true }
        );
      }
    );
  } catch (error) {
    console.error(error);
  }
  // const result = {
  //   email: email,
  //   id: id,
  //   resizedURL: resizedURL,
  // };
  // return result;
};
