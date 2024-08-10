// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// console.log(process.env.Next_PUBLIC_FIREBASE_API_KEY);

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAMJrZxvgUB3kWuiFqYOK8gLxrRsH5vFH8",
//   authDomain: "loop-clone-1e997.firebaseapp.com",
//   projectId: "loop-clone-1e997",
//   storageBucket: "loop-clone-1e997.appspot.com",
//   messagingSenderId: "639043831991",
//   appId: "1:639043831991:web:aa58b3aba651149110a532",
//   measurementId: "G-Y5XF9GL84J",
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";

// // Your web app's Firebase configuration
// // Ensure that all environment variables are correctly set
// const firebaseConfig = {
//   apiKey: "AIzaSyAMJrZxvgUB3kWuiFqYOK8gLxrRsH5vFH8",
//   authDomain: "loop-clone-1e997.firebaseapp.com",
//   projectId: "loop-clone-1e997",
//   storageBucket: "loop-clone-1e997.appspot.com",
//   messagingSenderId: "639043831991",
//   appId: "1:639043831991:web:aa58b3aba651149110a532",
//   measurementId: "G-Y5XF9GL84J",
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const analytics = getAnalytics(app); // Export analytics if needed

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "loop-clone-1e997.firebaseapp.com",
  projectId: "loop-clone-1e997",
  storageBucket: "loop-clone-1e997.appspot.com",
  messagingSenderId: "639043831991",
  appId: "1:639043831991:web:aa58b3aba651149110a532",
  measurementId: "G-Y5XF9GL84J",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
