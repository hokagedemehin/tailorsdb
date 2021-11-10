import { db, storage } from "../firebase/firebase";
// import { useUser, UserContext } from "../context/userContext";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SetImageClient = async (imgValue, formValue, user) => {
  const { uid, email } = user;

  const id = formValue?.id;

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
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/object-not-found":
            // File doesn't exist
            toast.error("💥main object not found 😪😥💥");
            break;
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
      // async () => {
      //   // Upload completed successfully, now we can get the download URL
      //   // const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      //   const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

      //   // .then((downloadURL) => {
      //   // console.log("File available at", downloadURL);
      //   // });
      //   // gs://tailorsdb.appspot.com/clients/ibk2k7@gmail.com/Lysandra Mullins/cropped-oau-logo_400x400.png
      //   function resizedName(fileName, dimensions = "400x400") {
      //     const extIndex = fileName.lastIndexOf(".");
      //     const ext = fileName.substring(extIndex);
      //     return `gs://tailorsdb.appspot.com/clients/ibk2k7@gmail.com/Lysandra Mullins/${fileName.substring(
      //       0,
      //       extIndex
      //     )}_${dimensions}${ext}`;
      //   }

      //   // console.log(resizedNewName(downloadURL));
      //   resizedURL = resizedName(downloadURL);
      //   await setDoc(
      //     docRef,
      //     {
      //       image: downloadURL,
      //       edittedTimestamp: serverTimestamp(),
      //     },
      //     { merge: true }
      //   );
      // }
      async () => {
        // Upload completed successfully, now we can get the download URL
        // const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        // try {
        // const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        // console.log("first image url", downloadURL);

        // gs://tailorsdb.appspot.com/clients/ibk2k7@gmail.com/Lysandra Mullins/cropped-oau-logo_400x400.png
        function resizedName(fileName, dimensions = "400x400") {
          const extIndex = fileName.lastIndexOf(".");
          const ext = fileName.substring(extIndex);
          return `clients/${email}/${formValue?.fullName}/${fileName.substring(
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

        // const compImg = ref(storage, resizedURL);
        // const compImgName = await getDownloadURL(compImg);

        // console.log("comp url: ", compImgName);

        // await setDoc(
        //   docRef,
        //   {
        //     image: compImgName,
        //     edittedTimestamp: serverTimestamp(),
        //   },
        //   { merge: true }
        // );
        // } catch (error) {
        //   switch (error.code) {
        //     case "storage/object-not-found":
        //       // File doesn't exist
        //       toast.error("💥object not found 😪😥💥");
        //       break;
        //     case "storage/unauthorized":
        //       // User doesn't have permission to access the object
        //       toast.error(
        //         "💥You don't have permission to access this file 😪😥💥"
        //       );
        //       break;
        //     case "storage/canceled":
        //       // User canceled the upload
        //       toast.error("💥Storage cancelled 😪😥💥");
        //       break;

        //     // ...

        //     case "storage/unknown":
        //       // Unknown error occurred, inspect the server response
        //       toast.error("💥storage unknown😪😥💥");
        //       break;
        //   }
        // }
      }
    );
  } catch (error) {
    console.error(error);
  }
};
