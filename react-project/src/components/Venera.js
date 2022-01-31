import React from "react";
import img6 from "./image/venera.png";



function Venera() {

    return (
        <div className="venera">
            <img src={img6} alt="venera" className="venera_img"/>
            <div className="venera_text">
                <p>Расстояние до солнца: 108 млн.км.</p>
                <p>Диаметр: 12100 км.</p>
                <p>Продолжительность года: 225 земных суток</p>
                <p>Продолительонсть суток: 243 земных суток</p>
                <p>Спутники: отсутствуют</p>
            </div>
        </div>
    )
}

export default Venera;