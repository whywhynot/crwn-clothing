import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCy3zw6mU1Fa3ndZKPNLJFStzK7k-VFg5Y",
  authDomain: "crwn-db-aed8f.firebaseapp.com",
  databaseURL: "https://crwn-db-aed8f.firebaseio.com",
  projectId: "crwn-db-aed8f",
  storageBucket: "",
  messagingSenderId: "768283030497",
  appId: "1:768283030497:web:0c7ec29a0f63c4d2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
