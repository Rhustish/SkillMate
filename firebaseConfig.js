// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import {...} from "firebase/auth"
// import {...} from "firebase/database"
// import {...} from "firebase/firestore"
// import {...} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9TD-gZplX1tdIIoXCenU4Y4E4xWh1kLM",
  authDomain: "skillmate-sepm.firebaseapp.com",
  projectId: "skillmate-sepm",
  storageBucket: "skillmate-sepm.appspot.com",
  messagingSenderId: "479323607436",
  appId: "1:479323607436:web:06f8b2ee9fa36a7fcec6a9",
  measurementId: "G-81KLH8JX6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);