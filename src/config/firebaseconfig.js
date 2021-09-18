import firebase from "firebase";
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBQZ8_37dS_7pFmPsrSx7iG0XJoh1XM3aI",
  authDomain: "authentication-66de3.firebaseapp.com",
  projectId: "authentication-66de3",
  storageBucket: "authentication-66de3.appspot.com",
  messagingSenderId: "479587559309",
  appId: "1:479587559309:web:0d4873d00d0eba04ce3fc4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase