import React from "react";
import Registration from "./components/Registration";
import './App.css';
import {useState, useEffect} from "react";
import {uid} from "uid";

import {getDatabase, ref, set} from "firebase/database";


function App() {

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

    //Чтение данных Firebase
    



    return (<div className="App">
        <input type="text" value={name} onChange={handleChange}/>
        <button onClick={writeDataBase}>Принять</button>
        <Registration/>

    </div>);
}

export default App;
