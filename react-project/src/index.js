import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {initializeApp} from "firebase/app";
import Router from "./components/Router";
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";


// Роутинг

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();


//Настройки Google Firebase

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
