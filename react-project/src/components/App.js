import React from "react";
import Header from "./Header";
import PreHeader from "./PreHeader";
import Description from "./Description";
import Earth from "./Earth";
import Line from "./Line";
import Mercury from "./Mercury";
import Venera from "./Venera";
import Mars from "./Mars";
import Jupiter from "./Jupiter";
import Saturn from "./Saturn";
import Uranium from "./Uranium";
import Neptune from "./Neptune";
import ReduxTest from "./ReduxTest";
import Card from "./Card";
import Data from "./Data";


function App() {

    const newData = Data.map(name => {
        return (
            <Card key={name.id}
                  names={name.name}/>
        )
    })

    return (
        <div className="app">
            <PreHeader/>
            <Header/>
            <Line/>
            <Description/>
            <Line/>
            <Mercury/>
            <Line/>
            <Venera/>
            <Line/>
            <Earth/>
            <Line/>
            <Mars/>
            <Line/>
            <Jupiter/>
            <Line/>
            <Saturn/>
            <Line/>
            <Uranium/>
            <Line/>
            <Neptune/>
            <Line/>
            {newData}
            <ReduxTest/>

        </div>
    )
}

export default App;
