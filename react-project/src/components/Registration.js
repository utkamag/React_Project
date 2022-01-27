import React from "react";
import '../App.css'
import App from "./App";
import {useState, useEffect} from "react";
import {uid} from "uid";

import {getDatabase, ref, set} from "firebase/database";
import {Link} from "react-router-dom";


function Registration() {

    const [name, setName] = useState("")

    //Записываем данные в хук

    const handleChange = (e) => {
        setName(e.target.value)
    }


    // Запись данных Firebase
    const writeDataBase = () => {
        const uuid = uid()
        const db = getDatabase()
        set(ref(db, `/uuid`), {
            name,
            uuid,
            complete: false
        })
        setName("")
    }



    return (<div className="container">
            <div className="registration">
                <div className="registration_login">Придумайте свой логин</div>
                <input className="registration_input" type="text" value={name} placeholder="Введите свой логин"
                       onChange={handleChange}/>
                <Link to="/app">
                    <button className="registration_button" onClick={writeDataBase}>Принять</button>
                </Link>
            </div>
        </div>
    )
}

export default Registration;