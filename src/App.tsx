import React, { useState} from 'react';
import './App.css';
import Buttons from "./Components/Buttons";
import Score from "./Components/Score";

export type typeOfNumber = number;

function App() {

    let [state, setState] = useState<typeOfNumber>(0)

    const addNumb = () => {
            setState(state + 1)

    }
    const resetNumb = () => {
        setState(0)
    }

    return (
        <div className="App">
            <div className={"BigSquare"}>
                <div className={"Square"}>
                    <Score state={state}/>
                    <Buttons state={state} addNumb={addNumb} resetNumb={resetNumb} />
                </div>
            </div>
        </div>
    );
}

export default App;
