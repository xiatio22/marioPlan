import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAIQ5xnON9xlQxbI0d_14cGOiXo92bJpxs",
  authDomain: "marioplan-197ed.firebaseapp.com",
  projectId: "marioplan-197ed",
  storageBucket: "marioplan-197ed.appspot.com",
  messagingSenderId: "189392065503",
  appId: "1:189392065503:web:3e17849afb3a25a0346a6a",
  measurementId: "G-G836EZ50VD",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
