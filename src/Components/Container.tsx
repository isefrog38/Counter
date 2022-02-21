import React, {useEffect, useState} from 'react';
import '../App.css';
import {Counter} from "./Counter";
import {Setter} from "./Setter";
import styled from "styled-components";
import {start} from "repl";

export const ErrorText = styled.h3`
  color: red;
  font-size: 30px;
`

export const Container = () => {

    const [number, setNumber] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(1);
    const [startValue, setStartValue] = useState<number>(0);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        let maxValueAsString = localStorage.getItem('countMaxValue')
        if (maxValueAsString) {
            setMaxValue(JSON.parse(maxValueAsString))
        }

        let startValueAsString = localStorage.getItem('countStartValue')
        if (startValueAsString) {
            setStartValue(JSON.parse(startValueAsString))
        }
        let numberAsString = localStorage.getItem('countNumbValue')
        if (numberAsString) {
            setNumber(JSON.parse(numberAsString))
        }
    }, [])


    const setLocalStoreMaxValue = () => {
        localStorage.setItem('countMaxValue', JSON.stringify(maxValue))
    }

    const setLocalStoreStartValue = () => {
        localStorage.setItem('countStartValue', JSON.stringify(startValue))
    }

    useEffect(() => {
        localStorage.setItem('countNumbValue', JSON.stringify(number))
    }, [number])

    const onChangeHandlerMax = (numb: number) => {
        if (numb >= 0) setMaxValue(numb);
        if (numb > 1) setDisabled(!disabled)
    }
    const onChangeHandlerStart = (numb: number) => {
        if (numb >= 0) setStartValue(numb);

        //if (numb >= maxValue) setError(true);
        if (numb > -1) setDisabled(!disabled);
    }

    useEffect(()=> {
        if(startValue >= maxValue) {
            setErrorMessage('Error , invalid value')
        } else {
            setErrorMessage('Please click on the "Set" button')
        }
        setError(true)
    },[startValue, maxValue])

    const addSet = () => {
        setNumber(startValue);
        setError(false);
        setDisabled(disabled);
        setLocalStoreMaxValue();
        setLocalStoreStartValue();
    }

    const Inc = () => number < maxValue && setNumber(number + 1);
    const Reset = () => setNumber(startValue);

    const DisabledIncButton = number >= maxValue;
    const DisabledResetButton = number <= startValue;
    const DisabledSetButton = startValue >= maxValue;

    return (
        <div className={"Main_Block"}>
            <Setter
                maxValue={maxValue}
                startValue={startValue}
                addSet={addSet}
                setMinV={onChangeHandlerStart}
                setMaxV={onChangeHandlerMax}
                disabledSet={DisabledSetButton}
            />
            <Counter
                maxValue={maxValue}
                error={error}
                number={number}
                addNumb={Inc}
                resetNumb={Reset}
                disabledRes={DisabledResetButton}
                disabledInc={DisabledIncButton}
                errorMessage={errorMessage}
            />
        </div>
    );
}
