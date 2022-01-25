import React from "react";
import Registration from "./Registration";
import App from "../App";
import {Route, Routes} from "react-router-dom";

// Описываем базовый роутинг приложения

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Registration/>}/>
            <Route path='/app' element={<App/>}/>
        </Routes>
    )
}

export default Router
