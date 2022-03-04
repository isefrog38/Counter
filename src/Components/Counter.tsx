import React from 'react';
import {MainBlock, Square} from "./StyledComp/Styles";
import Score from "./Score";
import {Button} from "./ButtonClear/Button";
import {ButtonsBlock} from "./StyledComp/Styles";
import {useSelector} from "react-redux";
import {StateType} from "../redux/store";
import {InitialStateType} from "../redux/Reducer";

type CounterType ={
    changeValue: () => void
    resetValue: () => void
    value: number ,
    maxValue: number,
    disableRES: boolean
    disableINC: boolean
    error: boolean
    errorMessage: string
}

export function Counter({changeValue, resetValue, maxValue, value, disableRES, disableINC, errorMessage, error}: CounterType) {


    return (
        <div className={"Block"}>
            <MainBlock>
                <Square>
                    <Score maxValue={maxValue} error={error} value={value} errorMessage={errorMessage}/>
                    <ButtonsBlock>
                        <Button title={"Inc"} onClickHandler={changeValue} disabled={disableINC} propsWidth={40}/>
                        <Button title={"Reset"} onClickHandler={resetValue} disabled={disableRES} propsWidth={40}/>
                    </ButtonsBlock>
                </Square>
            </MainBlock>
        </div>
    )}