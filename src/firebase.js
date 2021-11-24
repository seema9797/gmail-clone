import firebase from 'firebase'

// Required for side-effects
require("firebase/firestore");// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMI6WvqBeiL5uMcf-XPb9dlDBGjxkXYs0",
  authDomain: "fir-c5ac3.firebaseapp.com",
  projectId: "fir-c5ac3",
  storageBucket: "fir-c5ac3.appspot.com",
  messagingSenderId: "262910702645",
  appId: "1:262910702645:web:76ebee54f0acf2615dad7c",
  measurementId: "G-0S612JT24D"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};

