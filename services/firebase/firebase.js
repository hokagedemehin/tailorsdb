// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
// import firebase from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// import * as admin from 'firebase-admin'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};
// const app = null;
// // Initialize Firebase
// if (getApps().length) {
//   app = getApp();
// } else {
//   app = initializeApp(firebaseConfig);
// }
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// if (!firebase.apps.length) {
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// const db = getFirestore(app);
// const auth = getAuth(app);
// const storage = getStorage(app);
//   // firebase.initializeApp(clientCredentials)
//   // Check that `window` is in scope for the analytics module!
//   if (typeof window !== 'undefined') {
//     // Enable analytics. https://firebase.google.com/docs/analytics/get-started
//     if ('measurementId' in clientCredentials) {
//       firebase.analytics()
//       firebase.performance()
//     }
//   }
// }
export { app, db, auth, storage };
