import React from 'react';
import {MainBlock, Square} from "./StyledComp/Styles";
import Score from "./Score";
import {Button} from "./ButtonClear/Button";
import {ButtonsBlock} from "./StyledComp/Styles";

type NewCounterType ={
    state: number
    addNumb: () => void
    resetNumb: () => void
}

export const NewCounter = ({state, addNumb, resetNumb}: NewCounterType) => {

    const isIncDisabled = state >= 5;
    const isResetDisabled = !state;

    return (
        <div className={"Block"}>
            <MainBlock>
                <Square>
                    <Score state={state}/>
                    <ButtonsBlock>
                        <Button title={"Set"} onClickHandler={resetNumb} disabled={!isResetDisabled} propsWidth={70}/>
                    </ButtonsBlock>
                </Square>
            </MainBlock>
        </div>
    );
};

