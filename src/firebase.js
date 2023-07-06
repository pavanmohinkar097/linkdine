import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAx6VNW82RfNhdJWE-yPvmq4CwjtUEZ6BI",
  authDomain: "linkedin-5f6a5.firebaseapp.com",
  projectId: "linkedin-5f6a5",
  storageBucket: "linkedin-5f6a5.appspot.com",
  messagingSenderId: "680547354953",
  appId: "1:680547354953:web:5d06641ab053e1f0147298",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export { db };
