import React from "react";
import img10 from "./image/uranium.png";



function Uranium() {

    return (
        <div className="uranium">
            <img src={img10} alt="uranium" className="uranium_img"/>
            <div className="uranium_text">
                <p>Расстояние до солнца: 2860 млн.км.</p>
                <p>Диаметр: 51300 км.</p>
                <p>Продолжительность года: 84 земных года</p>
                <p>Продолительонсть суток: 17.2 земных часов</p>
                <p>Спутники: Миранда, Ариэль,Умбриэль, Титания, Оберон и еще 22 небесных тела</p>
            </div>
        </div>
    )
}

export default Uranium;