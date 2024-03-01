import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuMeHg1o4fowHIsIoNcdqvZlzdjEizdL4",
  authDomain: "asksite-fa391.firebaseapp.com",
  projectId: "asksite-fa391",
  storageBucket: "asksite-fa391.appspot.com",
  messagingSenderId: "287337527201",
  appId: "1:287337527201:web:c0385105ede055ac5ebde0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const goolgeProvider = new GoogleAuthProvider();

export {
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    goolgeProvider,
    signInWithPopup,
    GoogleAuthProvider
}