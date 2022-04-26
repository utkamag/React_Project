import {createStore, combineReducers, applyMiddleware} from "redux";
import {reducer} from "./Reducer";
import {secondReducer} from "./secondReducer"
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


// Объединяем два редьюсера

const rootReducer = combineReducers({
    reducer,
    secondReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))