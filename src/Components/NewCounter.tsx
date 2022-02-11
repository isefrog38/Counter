import React from 'react';
import {MainBlock, Square} from "./StyledComp/Styles";
import Score from "./Score";
import Buttons from "./Buttons";

type NewCounterType ={
    state: number
    addNumb: () => void
    resetNumb: () => void
}

export const NewCounter = ({state, addNumb, resetNumb}: NewCounterType) => {
    return (
        <div>
            <MainBlock>
                <Square>
                    <Score state={state}/>
                    <Buttons state={state} addNumb={addNumb} resetNumb={resetNumb} />
                </Square>
            </MainBlock>
        </div>
    );
};

