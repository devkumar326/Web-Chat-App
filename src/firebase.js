import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// const firebaseConfig = {
//     apiKey: "AIzaSyB13PntUEDMkFbTt2psiHOZtQih83qrf88",
//     authDomain: "whatsapp-clone-fafc9.firebaseapp.com",
//     databaseURL: "https://whatsapp-clone-fafc9.firebaseio.com",
//     projectId: "whatsapp-clone-fafc9",
//     storageBucket: "whatsapp-clone-fafc9.appspot.com",
//     messagingSenderId: "1027981883218",
//     appId: "1:1027981883218:web:f62f32ffe8e5701f0f2c8b",
//     measurementId: "G-0YMF5ZZL8N"
//   };
const firebaseConfig = {
  apiKey: "AIzaSyBa3gr3M5U-oCKmV35gdTxP3SYxk2f3Geg",
  authDomain: "web-chat-app-384ed.firebaseapp.com",
  projectId: "web-chat-app-384ed",
  storageBucket: "web-chat-app-384ed.appspot.com",
  messagingSenderId: "215358796170",
  appId: "1:215358796170:web:e4ca7c2d2fa1838cae5873",
  measurementId: "G-P6Z2BEQ0BF"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
