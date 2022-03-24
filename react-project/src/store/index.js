import {createStore, combineReducers} from "redux";
import {reducer} from "./Reducer";
import {secondReducer} from "./secondReducer"
import {composeWithDevTools} from "redux-devtools-extension";


// Объединяем два редьюсера

const rootReducer = combineReducers({
    reducer,
    secondReducer
})


export const store = createStore(rootReducer, composeWithDevTools())