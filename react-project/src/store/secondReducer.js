// Создаем State для второго редьюсера, используем массив данных

const deafultState = {
    customers: [],
}

// Создаем второй Редьюсер

export const secondReducer = (state = deafultState, action) => {
    switch (action.type) {
        case "ADD_CUSTOMER":
            return {...state, cash: state.cash + action.payload}
        case "GET_CUSTOMERS":
            return {...state, cash: state.cash - action.payload}

        default:
            return state
    }
}

