import React from "react";
import img8 from "./image/jupiter.png";



function Jupiter() {

    return (
        <div className="jupiter">
            <img src={img8} alt="jupiter" className="jupiter_img"/>
            <div className="jupiter_text">
                <p>Расстояние до солнца: 778.5 млн.км.</p>
                <p>Диаметр: 142984 км.</p>
                <p>Продолжительность года: 11.6 земных лет</p>
                <p>Продолительонсть суток: 10 земных суток</p>
                <p>Спутники: Ио, Европа, Ганимед, Каллисто, Метида и еще 74 небесных тела</p>
            </div>
        </div>
    )
}

export default Jupiter;