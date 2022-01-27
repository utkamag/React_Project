import React from "react";
import Header from "./Header";
import { getDatabase, ref, onValue} from "firebase/database";


function App() {

    return (
        <div className="app">

            <Header/>
        </div>
    )
}

export default App;
