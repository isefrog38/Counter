import React from 'react';
import {MainBlock, Square, Table, ButtonsBlock} from "./StyledComp/Styles";
import {Button} from "./ButtonClear/Button";

import {Input} from "./Input";

type NewCounterType ={
    startValue: number
    maxValue: number
    addSet: () => void
    setMinV : (e: number) => void
    setMaxV : (e: number) => void
    disabledSet: boolean
}

export const Setter = ({maxValue, startValue, addSet, setMinV, setMaxV, disabledSet}: NewCounterType) => {

    return (
        <div className={"Block"}>
            <MainBlock >
                <Square>
                    <Table >
                        <h1>Set Max Value : </h1><Input number={maxValue} setV={setMaxV} />
                        <h1>Set Min Value : </h1><Input number={startValue} setV={setMinV} />
                    </Table>
                    <ButtonsBlock>
                        <Button title={"Set"} onClickHandler={addSet} disabled={disabledSet} propsWidth={70}/>
                    </ButtonsBlock>
                </Square>
            </MainBlock>
        </div>
    );
};

