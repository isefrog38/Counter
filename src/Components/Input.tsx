import React, {ChangeEvent} from 'react';
import "../App.css"
import styled from "styled-components";


type InputType = {
    setValue: (e: number) => void
    number: number
}

export const Input = ({number, setValue}: InputType) => {

    const ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(+e.currentTarget.value);

    return (
        <span className={"Input_Block"}>
            <InputStyled type="number" onChange={ChangeEventHandler} value={number} />
        </span>
    );
}


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
    border: 1px solid #ffffff;
    background-color: transparent;
    color: #ffffff;
  }
  
  .error {
    background-color: rgba(253, 42, 42, 0.87);
    color: white;
  }
`