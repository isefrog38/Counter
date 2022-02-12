import React from 'react';
import {MainBlock, Square, Table, ButtonsBlock} from "./StyledComp/Styles";
import {Button} from "./ButtonClear/Button";

import {Input} from "./Input";

type NewCounterType ={
    addSet: () => void
    setMinV : (e: number) => void
    setMaxV : (e: number) => void
    disabledSet: boolean
}

export const NewCounter = ({ addSet, setMinV, setMaxV, disabledSet}: NewCounterType) => {

    return (
        <div className={"Block"}>
            <MainBlock wp={80}>
                <Square>
                    <Table >
                        <h1>Set Max Value : </h1><Input  setV={setMaxV} />
                        <h1>Set Min Value : </h1><Input  setV={setMinV} />
                    </Table>
                    <ButtonsBlock>
                        <Button title={"Set"} onClickHandler={addSet} disabled={disabledSet} propsWidth={70}/>
                    </ButtonsBlock>
                </Square>
            </MainBlock>
        </div>
    );
};

