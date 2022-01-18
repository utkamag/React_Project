import React from "react";
import {useForm} from "react-hook-form";
import {getDatabase} from "firebase/database";


function Registration() {

    const {register, handleSubmit, formState: {errors, submitCount}} = useForm()

    const onSubmit = (data) => {
        console.log(JSON.stringify(data))

    }


    return (<form onSubmit={handleSubmit(onSubmit)}>
        <div className="Registration">
            <input type="email" placeholder="Введите почту" name="email" {...register('email', {required: true})}/>
            <input type="password" placeholder="Пароль" name="password" {...register('password', {
                required: true,
                minLength: 5
            })}/>
            {errors.password && <i>Не менее 5 символов</i>}
            <button type="submit">Регистрация</button>

        </div>
    </form>)
}

export default Registration;
