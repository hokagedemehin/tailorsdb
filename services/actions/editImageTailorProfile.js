// import React from "react";
import { db, storage } from "../firebase/firebase";
// import { useUser, UserContext } from "../context/userContext";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const EditImageTailorProfile = async (imgValue, user) => {
  const { uid, email } = user;

  try {
    const docRef = doc(db, "tailors", uid);
    const storageRef = ref(
      storage,
      `tailors/${email}/${imgValue?.photo?.name}`
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
        // const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

        // console.log("File available at", downloadURL);

        function resizedName(fileName, dimensions = "400x400") {
          const extIndex = fileName.lastIndexOf(".");
          const ext = fileName.substring(extIndex);
          return `tailors/${email}/${fileName.substring(
            0,
            extIndex
          )}_${dimensions}${ext}`;
        }
        // console.log(resizedNewName(downloadURL));
        const resizedURL = resizedName(imgValue?.photo?.name);
        // console.log("resized url: ", resizedURL);
        setTimeout(async () => {
          const compImg = ref(storage, resizedURL);
          const compImgName = await getDownloadURL(compImg);

          // console.log("comp url: ", compImgName);

          await setDoc(
            docRef,
            {
              image: compImgName,
              edittedTimestamp: serverTimestamp(),
            },
            { merge: true }
          );
        }, 5000);
      }
    );
  } catch (error) {
    console.error(error);
  }
};

// export const EditImageTailorProfile = (imgValue, user) => {
//   const { uid, email } = user;

//   // try {
//   const docRef = doc(db, "tailors", uid);
//   const storageRef = ref(storage, `tailors/${email}/${imgValue?.photo?.name}`);
//   const uploadTask = uploadBytesResumable(storageRef, imgValue?.photo);

//   uploadTask.on(
//     "state_change",
//     (snapshot) => {
//       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//       console.log("Upload is " + progress + "% done");
//     },
//     () => {
//       // Upload completed successfully, now we can get the download URL
//       // const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
//       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//         console.log("File available at", downloadURL);
//       });
//     }
//   );
// };

// // Upload file and metadata to the object 'images/mountains.jpg'
// const storageRef = ref(storage, "images/" + file.name);
// const uploadTask = uploadBytesResumable(storageRef, file, metadata);

// // Listen for state changes, errors, and completion of the upload.
// uploadTask.on(
//   "state_changed",
//   (snapshot) => {
//     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     console.log("Upload is " + progress + "% done");
//   },

//   () => {
//     // Upload completed successfully, now we can get the download URL
//     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//       console.log("File available at", downloadURL);
//     });
//   }
// );
