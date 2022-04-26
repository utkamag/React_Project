// Создаем State для второго редьюсера, используем массив данных

const customerState = {
    customers: [],
}

//Выносим action в отдельные константы

const ADD_CUSTOMERS = "ADD_CUSTOMERS"
const REMOVE_CUSTOMERS = "REMOVE_CUSTOMERS"
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS"

// Создаем второй Редьюсер

export const secondReducer = (state = customerState, action) => {
    switch (action.type) {
        case ADD_MANY_CUSTOMERS:
            return {customers: [...state.customers, ...action.payload]}
        case ADD_CUSTOMERS:
            return {customers: [...state.customers, action.payload]}
        case REMOVE_CUSTOMERS:
            return {customers: [...state.customers, action.payload]}

        default:
            return state
    }
}


