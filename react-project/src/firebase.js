import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database";



const firebaseConfig = {
    apiKey: "AIzaSyBuCn3bfP-ffRUrgh6itDTH3AI3pJutbr8",
    authDomain: "react-project-48bca.firebaseapp.com",
    databaseURL: "https://react-project-48bca-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-project-48bca",
    storageBucket: "react-project-48bca.appspot.com",
    messagingSenderId: "334069935765",
    appId: "1:334069935765:web:3e8beda073518cf14ef59c",
    measurementId: "G-D0VM83NBJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app)