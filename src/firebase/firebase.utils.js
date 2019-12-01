import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDhqKWxJaeeScmyKXGs3pvoNapYHztMVCg",
  authDomain: "crwn-db-c61b6.firebaseapp.com",
  databaseURL: "https://crwn-db-c61b6.firebaseio.com",
  projectId: "crwn-db-c61b6",
  storageBucket: "crwn-db-c61b6.appspot.com",
  messagingSenderId: "748259476595",
  appId: "1:748259476595:web:f40844a82abed477db5606",
  measurementId: "G-FZFWEZ6DF3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
