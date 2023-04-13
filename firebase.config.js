// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDgEzs9unvr-VcQ6bn7Pdftvhpxw6Z5Fvo",
    authDomain: "stem2023.firebaseapp.com",
    databaseURL: "https://stem2023-default-rtdb.firebaseio.com",
    projectId: "stem2023",
    storageBucket: "stem2023.appspot.com",
    messagingSenderId: "497696288668",
    appId: "1:497696288668:web:d7a9972e198e93d08aa259",
    measurementId: "G-VKWJDM0X17",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
