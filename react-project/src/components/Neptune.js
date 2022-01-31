import React from "react";
import img11 from "./image/neptune.png";



function Neptune() {

    return (
        <div className="neptune">
            <img src={img11} alt="neptune" className="neptune_img"/>
            <div className="neptune_text">
                <p>Расстояние до солнца: 4500 млн.км.</p>
                <p>Диаметр: 49500 км.</p>
                <p>Продолжительность года: 165 земных года</p>
                <p>Продолительонсть суток: 18 земных часов</p>
                <p>Спутники: Тритон, Нереида, Протей и еще 11 небесных тел</p>
            </div>
        </div>
    )
}

export default Neptune;