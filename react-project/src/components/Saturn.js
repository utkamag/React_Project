import React from "react";
import img9 from "./image/saturn.png";



function Saturn() {

    return (
        <div className="saturn">
            <img src={img9} alt="saturn" className="saturn_img"/>
            <div className="saturn_text">
                <p>Расстояние до солнца: 1427 млн.км.</p>
                <p>Диаметр: 120420 км.</p>
                <p>Продолжительность года: 29.5 земных лет</p>
                <p>Продолительонсть суток: 10.5 земных часов</p>
                <p>Спутники: Титан, Рея, Энцелан и еще 79 небесных тела</p>
            </div>
        </div>
    )
}

export default Saturn;