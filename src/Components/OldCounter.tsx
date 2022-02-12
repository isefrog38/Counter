import React from 'react';
import {MainBlock, Square} from "./StyledComp/Styles";
import Score from "./Score";
import {Button} from "./ButtonClear/Button";
import {ButtonsBlock} from "./StyledComp/Styles";

type OldCounterType ={
    state: number
    addNumb: () => void
    resetNumb: () => void
}

export function OldCounter({state, addNumb, resetNumb}: OldCounterType) {

    const isIncDisabled = state >= 5;
    const isResetDisabled = !state;

    return (
        <div className={"Block"}>
            <MainBlock>
                <Square>
                    <Score state={state}/>
                    {/*<Buttons state={state} addNumb={addNumb} resetNumb={resetNumb} />*/}
                    <ButtonsBlock>
                        <Button title={"Inc"} onClickHandler={addNumb} disabled={isIncDisabled} propsWidth={40}/>
                        <Button title={"Reset"} onClickHandler={resetNumb} disabled={isResetDisabled} propsWidth={40}/>
                    </ButtonsBlock>
                </Square>
            </MainBlock>
        </div>
    );
}