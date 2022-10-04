import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1w33OxVbC-A5Nb4P1MXPqpN1rkpWjej4",
    authDomain: "tracker-bd317.firebaseapp.com",
    projectId: "tracker-bd317",
    storageBucket: "tracker-bd317.appspot.com",
    messagingSenderId: "818342093484",
    appId: "1:818342093484:web:4f5cb5fb41a648370af509"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();