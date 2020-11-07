import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBQ4G8vuRThwJT0BnpQwAJPDUdHLsT3Voc",
  authDomain: "clone-5da4b.firebaseapp.com",
  databaseURL: "https://clone-5da4b.firebaseio.com",
  projectId: "clone-5da4b",
  storageBucket: "clone-5da4b.appspot.com",
  messagingSenderId: "837582383893",
  appId: "1:837582383893:web:0dc16525364155fba6d71c",
  measurementId: "G-TJ4Y2QW8XC",

});


const auth = firebase.auth();

export {  auth };
    