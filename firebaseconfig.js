import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import Constants from "expo-constants"

const firebaseConfig = {
    apiKey: "AIzaSyA0DARK6VmHTh3574JlL35W4qBqUSgv-fE",
    authDomain: "skillmate-e2c09.firebaseapp.com",
    projectId: "skillmate-e2c09",
    storageBucket: "skillmate-e2c09.appspot.com",
    messagingSenderId: "514209117717",
    appId: "1:514209117717:web:ebd6e06d157e179a03801c"
}

initializeApp(firebaseConfig)
export const auth = getAuth();
export const database = getFirestore();