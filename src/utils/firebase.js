// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRfr5H0MDkZf-v84aYW2TxtEkqZ_m2nSQ",
    authDomain: "netflixgpt-fae1b.firebaseapp.com",
    projectId: "netflixgpt-fae1b",
    storageBucket: "netflixgpt-fae1b.appspot.com",
    messagingSenderId: "287378449766",
    appId: "1:287378449766:web:aa0226685dd50c4321d4a7",
    measurementId: "G-9XW57YLKFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);