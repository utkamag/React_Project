import React from "react";
import {useDispatch, useSelector} from "react-redux";
import apiCustomers from "../asyncActions/apiCustomers";

function ReduxTest() {

    //Добавляем диспатч
    const dispatch = useDispatch()

    // Получаем стейт
    const cash = useSelector(state => state.reducer.cash)
    const customers = useSelector(state => state.secondReducer.customers)


    //Кнопка 1 для теста redux

    const click1 = () => {
        dispatch({type: "ADD_NUMBER", payload: 5})

    }

    //Кнопка 2 для теста redux

    const click2 = () => {
        dispatch({type: "DELETE_NUMBER", payload: 5})

    }

    //Кнопка 3 для теста redux

    const click3 = () => {
        let cust = {
            name: "123",
        }

        dispatch({type: "ADD_CUSTOMERS", payload: cust})

    }

    //Кнопка 4 для теста redux

    const click4 = () => {
        dispatch({type: "REMOVE_CUSTOMERS", payload: "Egor"})

    }

    //Кнопка 5 Api

    const click5 = () => {
        apiCustomers()

    }


    return (
        <div className="redux_test">
            <button className="redux_button_one" onClick={() => click1()}>+</button>
            <div className="redux_text">{cash}</div>
            <button className="redux_button_two" onClick={() => click2()}>-</button>

            <button className="redux_button_1" onClick={click3}>Добавить клиента</button>
            <button className="redux_button_2" onClick={click4}>Удалить клиента</button>

            <button className="redux_button_2" onClick={click5}>Данные с сервера</button>

            {
                customers.length > 0 ?
                    <div>{customers.map(customer => {
                                <div>{customer}</div>
                        }
                    )}</div>
                    :
                    <div>Клиенты отсутствуют</div>
            }

            <div>{customers}</div>
        </div>

    )
}

export default ReduxTest