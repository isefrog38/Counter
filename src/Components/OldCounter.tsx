import React from 'react';
import {MainBlock, Square} from "./StyledComp/Styles";
import Score from "./Score";
import {Button} from "./ButtonClear/Button";
import {ButtonsBlock} from "./StyledComp/Styles";

type OldCounterType ={
    number: number
    addNumb: () => void
    resetNumb: () => void
    disabledRes: boolean
    disabledInc: boolean
    lastNumb: boolean
}

export function OldCounter({addNumb, resetNumb, number, disabledRes, disabledInc, lastNumb}: OldCounterType) {

    return (
        <div className={"Block"}>
            <MainBlock>
                <Square>
                    <Score number={number} lastNumb={lastNumb}/>
                    <ButtonsBlock>
                        <Button title={"Inc"} onClickHandler={addNumb} disabled={disabledInc} propsWidth={40}/>
                        <Button title={"Reset"} onClickHandler={resetNumb} disabled={disabledRes} propsWidth={40}/>
                    </ButtonsBlock>
                </Square>
            </MainBlock>
        </div>
    );
}