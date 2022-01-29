import React from 'react';

type ButtonsType = {
    state: number
    addNumb: () => void
    resetNumb: () => void
}

const Buttons = ({state, addNumb, resetNumb}: ButtonsType ) => {

    const classButtonReset = state === 0 ? "lastButton fb disabledButton" : "lastButton fb";
    const classButtonInc =  state >= 5 ? "firstButton fb disabledButton" : "firstButton fb";

    const isIncDisabled = state >= 5;
    const isResetDisabled = !state;

    return (
        <>
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
        </>
    );
};

export default Buttons;