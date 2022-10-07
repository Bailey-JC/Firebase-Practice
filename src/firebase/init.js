// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6OQ-MTge96eMSRkX7MO-j6ddeIIwfWyA",
  authDomain: "fir-test-42d59.firebaseapp.com",
  projectId: "fir-test-42d59",
  storageBucket: "fir-test-42d59.appspot.com",
  messagingSenderId: "910921753033",
  appId: "1:910921753033:web:c4eeacec70f2d958af4818"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()