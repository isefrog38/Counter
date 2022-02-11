import React from 'react';
import {Button} from "./ButtonClear/Button";
import {ButtonsBlock} from "./StyledComp/Styles";

type ButtonsType = {
    state: number
    addNumb: () => void
    resetNumb: () => void
}

const Buttons = ({state, addNumb, resetNumb}: ButtonsType ) => {

    const isIncDisabled = state >= 5;
    const isResetDisabled = !state;

    return (
        <>
            <ButtonsBlock>
                <Button title={"Inc"} onClickHandler={addNumb} disabled={isIncDisabled}/>
                <Button title={"Reset"} onClickHandler={resetNumb} disabled={isResetDisabled}/>
            </ButtonsBlock>
        </>
    );
};

export default Buttons;