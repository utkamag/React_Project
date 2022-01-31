import React from "react";
import img7 from "./image/mars.png";



function Mars() {

    return (
        <div className="mars">
            <img src={img7} alt="mars" className="mars_img"/>
            <div className="mars_text">
                <p>Расстояние до солнца: 228 млн.км.</p>
                <p>Диаметр: 6792 км.</p>
                <p>Продолжительность года: 687 земных суток</p>
                <p>Продолительонсть суток: 24.6 земных суток</p>
                <p>Спутники: Фобос, Деймос</p>
            </div>
        </div>
    )
}

export default Mars;