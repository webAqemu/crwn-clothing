import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyB6SIy4K0qnLHsL0akdvK2de2GyeV8D5i4",
  authDomain: "crwn-db-eb5a9.firebaseapp.com",
  projectId: "crwn-db-eb5a9",
  storageBucket: "crwn-db-eb5a9.appspot.com",
  messagingSenderId: "767043847351",
  appId: "1:767043847351:web:d356102ae82d5a8261f932",
  measurementId: "G-LGEF2HKDT9"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;