import React from "react";
import {useForm} from "react-hook-form";


function Registration() {

    const handleSubmit = () => {
        console.log("123")

    }

    return (
        <div className="Registration">
            <h1>Регистрация</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Введите "/>

                <button type="submit">Готово!</button>

            </form>
        </div>
    );
}

export default Registration;
