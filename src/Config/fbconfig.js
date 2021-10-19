// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
// import 'firebase/compat/auth';
import "firebase/compat/firestore";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_2dwFDex1rbp0Sv_g3sQcJIcIh1m1Luc",
  authDomain: "evernote-d6dee.firebaseapp.com",
  projectId: "evernote-d6dee",
  storageBucket: "evernote-d6dee.appspot.com",
  messagingSenderId: "846970237826",
  appId: "1:846970237826:web:c76e973a8e6abb58ae959b",
};

// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// const db = firebase.firestore();

export default firebase;
