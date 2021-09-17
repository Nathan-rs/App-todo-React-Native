import firebase from "firebase";
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDMc0k46FQI-l4ZvK-3pQeG6yiFYtZxEmw",
    authDomain: "todo-26b1c.firebaseapp.com",
    projectId: "todo-26b1c",
    storageBucket: "todo-26b1c.appspot.com",
    messagingSenderId: "348927663428",
    appId: "1:348927663428:web:f38d1f182a64684d524b11"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.firestore()
export default database