// import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
// import { getAuth,FacebookAuthProvider } from 'firebase/auth';
// import { initializeApp } from "firebase/app";

  // const firebaseConfig = {
  //   apiKey: "AIzaSyC3hzdx1RzXNqlGAxpD_W7AX4lzXtKYPuQ",
  // authDomain: "kcv-react-vite-pro.firebaseapp.com",
  // databaseURL: "https://kcv-react-vite-pro-default-rtdb.firebaseio.com",
  // projectId: "kcv-react-vite-pro",
  // storageBucket: "kcv-react-vite-pro.appspot.com",
  // messagingSenderId: "473169178893",
  // appId: "1:473169178893:web:3ec96e3d1d7ceec5fd8044"
  // };
//   const app =initializeApp(firebaseConfig);
//   const auth = getAuth(app);
//  const db = getFirestore(app);
// //  const users = collection(db, "users");
// // const provider = new FacebookAuthProvider(app);
// // const storage = getStorage(app);
//   export { db,auth,getDocs,addDoc };
// src/firebase.js



// firebase.js (or a similar configuration file)
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC3hzdx1RzXNqlGAxpD_W7AX4lzXtKYPuQ",
  authDomain: "kcv-react-vite-pro.firebaseapp.com",
  databaseURL: "https://kcv-react-vite-pro-default-rtdb.firebaseio.com",
  projectId: "kcv-react-vite-pro",
  storageBucket: "kcv-react-vite-pro.appspot.com",
  messagingSenderId: "473169178893",
  appId: "1:473169178893:web:3ec96e3d1d7ceec5fd8044"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
