import React, {ChangeEvent} from 'react';
import "../App.css"
import styled from "styled-components";

export const InputStyled = styled.input`
  padding: 5px 0 5px 15px;
  font-size: 20px;
  font-weight: bolder;
  width: 130px;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 10px;
  color: white;
  
  &:focus{
    border: 1px solid white;
    background-color: white;
    color: palevioletred;
  }
  
  .error {
    background-color: red;
    color: white;
  }
`

type InputType = {
    setV: (e: number) => void
    number: number
}

export const Input = ({number, setV}: InputType) => {

    const ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => setV(+e.currentTarget.value);

    return (
        <span className={"Input_Block"}>
            <InputStyled type="number" onChange={ChangeEventHandler} value={number} />
        </span>
    );
}