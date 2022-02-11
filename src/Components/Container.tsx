import React, {useState} from 'react';
import '../App.css';
import {OldCounter} from "./OldCounter";
import {NewCounter} from "./NewCounter";


export type typeOfNumber = number;

export const Container = () => {

    let [state, setState] = useState<typeOfNumber>(0)

    const addNumb = () => {
        setState(state + 1)

    }
    const resetNumb = () => {
        setState(0)
    }


    return (
        <div className="App">
            <OldCounter state={state} addNumb={addNumb} resetNumb={resetNumb}/>
            <NewCounter state={state} addNumb={addNumb} resetNumb={resetNumb}/>
        </div>
    );
}
