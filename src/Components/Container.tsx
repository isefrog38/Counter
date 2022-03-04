import React, {useEffect} from 'react';
import '../App.css';
import {Counter} from "./Counter";
import {Setter} from "./Setter";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "../redux/store";
import {InitialStateType} from "../redux/Reducer";
import {
    changeMaxValueAC,
    changeMinValueAC,
    changeValueAC,
    resetValueAC, setErrorAC,
    setValueAC
} from "../redux/Actions";
import {loadState} from "../redux/localstorage";


export const Container = () => {

    let dispatch = useDispatch();
    let state = useSelector<StateType, InitialStateType>(state => state.counterData);

    useEffect(() => {
       const state = loadState()

        if (state) {
            setMinValue(state.min)
            setMaxValue(state.max)
            setValue()
        }
    }, [])

    const setMaxValue = (max: number) => {
            dispatch(changeMaxValueAC(max))
    }
    const setMinValue = (min: number) => {
            dispatch(changeMinValueAC(min))
    }
    const changeValue = () => {
            dispatch(changeValueAC())
    }
    const resetValue = () => {
        dispatch(resetValueAC())
    }
    const setValue = () => {
        dispatch(setValueAC())
    }

    let ErrorMessage = state.max <= state.min || state.max < 0 || state.min < 0 ? "Error , invalid value" : 'Please click on the "Set" button' ;

    let disabledSet = state.max <= state.min ;
    let IncDisabled = state.value === state.max || state.max <= state.min || state.error;
    let ResetDisabled = state.value === state.min || state.max <= state.min || state.error;


    return (
        <div className={"Main_Block"}>
            <Setter
                setMaxValue={setMaxValue}
                setMinValue={setMinValue}
                setValue={setValue}
                disableSET={disabledSet}
                maxValue={state.max}
                minValue={state.min}
            />
            <Counter
                changeValue={changeValue}
                resetValue={resetValue}
                maxValue={state.max}
                value={state.value}
                disableINC={IncDisabled}
                disableRES={ResetDisabled}
                errorMessage={ErrorMessage}
                error={state.error}
            />
        </div>
    );
}


export const ErrorText = styled.h3`
  color: red;
  font-size: 30px;
`