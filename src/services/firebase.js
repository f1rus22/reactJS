import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvWvNb-d5RGgYO46MVTMwwpupksLTVpbU",
    authDomain: "gb22112021.firebaseapp.com",
    databaseURL: "https://gb22112021-default-rtdb.firebaseio.com",
    projectId: "gb22112021",
    storageBucket: "gb22112021.appspot.com",
    messagingSenderId: "229838149462",
    appId: "1:229838149462:web:6c06c3dac2f063626428f7"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const auth = firebase.auth();