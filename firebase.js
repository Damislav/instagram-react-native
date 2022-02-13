import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKyjz0ewHVuDJaV1wiSnjt77s4WXGQlds",
  authDomain: "react-native-instagram-3572b.firebaseapp.com",
  projectId: "react-native-instagram-3572b",
  storageBucket: "react-native-instagram-3572b.appspot.com",
  messagingSenderId: "101667019864",
  appId: "1:101667019864:web:66727337b978365d123e2d",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
