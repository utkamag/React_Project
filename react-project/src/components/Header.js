import React, {useEffect, useState} from "react";
import {Parallax} from "react-parallax";
import img1 from "./image/Header_1.jpg"
import img2 from "./image/Trees.png"
import img3 from "./image/img-space.jpg"

import {getDatabase, onValue, ref} from "firebase/database";
import {initializeApp} from 'firebase/app';


function Header() {

    //Хук базы данных

    const [todos, setTodos] = useState([])

    //Чтение данных Firebase


    useEffect(() => {
        const db = getDatabase()
        onValue(ref(db, "/uuid" + "/name"), snapshot => {
            const data = snapshot.val()
            console.log(data)
            setTodos(data)
        })

    }, [])


    return (
        <div className="header">
                <Parallax bgImage={img3} bgImageAlt="the cat" strenght={500}>
                    <div style={{height: 600}} className="header_first_text">
                        <div>Добро пожаловать! <div className="header_firebase_nickname">{todos}</div></div>
                    </div>
                </Parallax>

        </div>
    )
}

export default Header;
