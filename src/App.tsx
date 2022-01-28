import React, { useState} from 'react';
import './App.css';

function App() {

    type typeOfNumber = number;

    let [state, setState] = useState<typeOfNumber>(0)

    const addNumb = () => {
            setState(state + 1)

    }
    const resetNumb = () => {
        setState(0)
    }

    const classButtonReset = state === 0 ? "lastButton fb disabledButton" : "lastButton fb";
    const classButtonInc =  state >= 5 ? "firstButton fb disabledButton" : "firstButton fb";
    const colorText= state === 5 ? "redColor" : "";

    const isIncDisabled = state >= 5;
    const isResetDisabled = !state;

    return (
        <div className="App">
            <div className={"BigSquare"}>
                <div className={"Square"}>
                    <div className={"Table"}>
                        <span className={colorText}>
                            {state}
                        </span>
                    </div>
                    <div className={"ButtonsBlock"}>
                        <button
                            onClick={addNumb}
                            className={classButtonInc}
                            disabled={isIncDisabled}
                        >
                            inc
                        </button>
                        <button
                            onClick={resetNumb}
                            className={classButtonReset}
                            disabled={isResetDisabled}
                        >
                            reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
