// import { initializeApp } from "firebase/app";
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAKyjz0ewHVuDJaV1wiSnjt77s4WXGQlds",
  authDomain: "react-native-instagram-3572b.firebaseapp.com",
  projectId: "react-native-instagram-3572b",
  storageBucket: "react-native-instagram-3572b.appspot.com",
  messagingSenderId: "101667019864",
  appId: "1:101667019864:web:66727337b978365d123e2d",
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
