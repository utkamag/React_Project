import React from "react";
import img5 from "./image/mercury.png";



function Mercury() {

    return (
        <div className="mercury">
            <img src={img5} alt="mercury" className="mercury_img"/>
            <div className="mercury_text">
                <p>Расстояние до солнца: 58 млн.км.</p>
                <p>Диаметр: 4879 км.</p>
                <p>Продолжительность года: 88 земных суток</p>
                <p>Продолительонсть суток: 176 земных суток</p>
                <p>Спутники: отсутствуют</p>
            </div>
        </div>
    )
}

export default Mercury;