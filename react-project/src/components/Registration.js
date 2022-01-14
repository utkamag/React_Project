import React from "react";
import {useForm} from "react-hook-form";
import {useState} from "react";


function Registration() {

    const {register, handleSubmit} = useForm()
    const {name, setName} = useState("123")

    const qiwi = (data) => {
        setName(JSON.stringify(data))

    }

    return (
        <div className="Registration">
            <h1>Регистрация</h1>
            <form onSubmit={handleSubmit(qiwi)}>
                <input type="text" placeholder="Введите " {...register("name")}/>

                <button type="submit">Готово!</button>

            </form>
        </div>
    );
}

export default Registration;
