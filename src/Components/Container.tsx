import React, {useEffect, useState} from 'react';
import '../App.css';
import {OldCounter} from "./OldCounter";
import {NewCounter} from "./NewCounter";

export const Container = () => {

    const [number, setNumber] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);
    const [startValue, setStartValue] = useState<number>(0);
    const [disabled, setDisabled] = useState(false);

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

    useEffect(() => {
        localStorage.setItem('countMaxValue', JSON.stringify(maxValue))
    }, [maxValue])

    useEffect(() => {
        localStorage.setItem('countStartValue', JSON.stringify(startValue))
    }, [startValue])

    useEffect(() => {
        localStorage.setItem('countNumbValue', JSON.stringify(number))
    }, [number])

    const onChangeHandlerMax = (numb: number) => {
        if ( numb > 0 ) {
        setMaxValue(numb);
        setDisabled(false);
        }
    }
    const onChangeHandlerStart = (numb: number) => {
        if ( numb > -1 ) {
            setStartValue(numb);
            setDisabled(false);
        }
    }
    const addSet = () => {
        setNumber(startValue);
        setDisabled(true);
    }

    const Inc = () => number < maxValue && setNumber(number + 1)
    const Reset = () => setNumber(startValue)
    const LastNumber = number < maxValue;
    const DisabledIncButton = number >= maxValue;
    const DisabledResetButton = number <= startValue;
    const DisabledSetButton = number === startValue ;

    const TextError = () => {
        if (maxValue <= startValue) return "Number is not valid";
        if (startValue < 0) return "Start value is not valid";
    }

    return (
        <div className={"Main_Block"}>
            <NewCounter  addSet={addSet} setMinV={onChangeHandlerStart} setMaxV={onChangeHandlerMax} disabledSet={DisabledSetButton}/>
            <OldCounter textError={TextError} number={number} addNumb={Inc} resetNumb={Reset} disabledRes={DisabledResetButton} disabledInc={DisabledIncButton} lastNumb={LastNumber}/>
        </div>
    );
}
