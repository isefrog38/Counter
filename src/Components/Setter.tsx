import React from 'react';
import {MainBlock, Square, Table, ButtonsBlock} from "./StyledComp/Styles";
import {Button} from "./ButtonClear/Button";

import {Input} from "./Input";
import {useSelector} from "react-redux";
import {StateType} from "../redux/store";
import {InitialStateType} from "../redux/Reducer";

type NewCounterType ={
    setMaxValue: (max: number) => void
    setMinValue: (min: number) => void
    setValue: () => void,
    minValue: number,
    maxValue: number,
    disableSET: boolean
}

export const Setter = (props: NewCounterType) => {
    //let state = useSelector<StateType, InitialStateType>(state => state.reducer)

    return (
        <div className={"Block"}>
            <MainBlock >
                <Square>
                    <Table >
                        <h1>Set Max Value : </h1><Input number={props.maxValue} setValue={props.setMaxValue} />
                        <h1>Set Min Value : </h1><Input number={props.minValue} setValue={props.setMinValue} />
                    </Table>
                    <ButtonsBlock>
                        <Button title={"Set"} onClickHandler={props.setValue} disabled={props.disableSET} propsWidth={70}/>
                    </ButtonsBlock>
                </Square>
            </MainBlock>
        </div>
    );
};

