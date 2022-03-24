import React from "react";
import {useDispatch, useSelector} from "react-redux";

function ReduxTest(){

    //Добавляем диспатч
    const dispatch = useDispatch()

    // Получаем стейт
    const cash = useSelector(state => state.reducer.cash)


    //Кнопка 1 для теста redux

    const click1 = () => {
        dispatch({type:"ADD_NUMBER", payload:5})

    }

    //Кнопка 2 для теста redux

    const click2 = () => {
        dispatch({type:"DELETE_NUMBER", payload:5})

    }


    return (
        <div className="redux_test">
            <button className="redux_button_one" onClick={() => click1()}>+</button>
            <div className="redux_text">{cash}</div>
            <button className="redux_button_two" onClick={() => click2()}>-</button>
        </div>
    )
}

export default ReduxTest