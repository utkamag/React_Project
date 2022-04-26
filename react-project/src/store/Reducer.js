// Создаем State

const deafultState = {
    cash: 5,
}


// Создаем Редьюсер

export const reducer = (state = deafultState, action) => {
    switch (action.type) {
        case "ADD_NUMBER":
            return {cash: state.cash + action.payload}
        case "DELETE_NUMBER":
            return {cash: state.cash - action.payload}

        default:
            return state
    }
}
