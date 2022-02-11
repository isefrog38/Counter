import React from 'react';
import '../App.css';
import Score from "./Score";
import Buttons from "./Buttons";
import {MainBlock, Square} from "./StyledComp/Styles";

type OldCounterType ={
    state: number
    addNumb: () => void
    resetNumb: () => void
}

export function OldCounter({state, addNumb, resetNumb}: OldCounterType) {

   return (
        <div className="App">
            <MainBlock>
                <Square>
                    <Score state={state}/>
                    <Buttons state={state} addNumb={addNumb} resetNumb={resetNumb} />
                </Square>
            </MainBlock>
        </div>
    );
}