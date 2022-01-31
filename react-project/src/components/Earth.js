import React from "react";
import img4 from "./image/earth_1.png";

function Earth() {

    return (
        <div className="earth">
            <img src={img4} alt="earth" className="earth_img"/>
            <div className="earth_text">
                <p>Расстояние до солнца: 150 млн.км.</p>
                <p>Диаметр: 12756 км.</p>
                <p>Продолжительность года: 365 суток</p>
                <p>Продолительонсть суток: 24 часа</p>
                <p>Спутники: Луна</p>
            </div>
        </div>
    )
}

export default Earth;