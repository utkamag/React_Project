import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtmvC4glsaCyFM7MqnGxI6BJUBIw6AgFc",
    authDomain: "project-1-5dd73.firebaseapp.com",
    projectId: "project-1-5dd73",
    storageBucket: "project-1-5dd73.appspot.com",
    messagingSenderId: "785943024758",
    appId: "1:785943024758:web:7e188c0c8a32ef2038bb57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);