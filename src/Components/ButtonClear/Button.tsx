import React from 'react';
import styled from "styled-components";

type PropsTypeSC = {
    pw: number
}

const ButtonStyled = styled.button<PropsTypeSC>`
  color: palevioletred;
  background-color: white;
  padding: 5px 40px;
  border: 1px solid palevioletred;
  border-radius: 15px;
  width: ${({pw}) => pw ?  pw : 40}%;
  height: 70px;
  font-size: 40px;
  font-weight: bold;
  font-style: oblique;
  margin: 0 15px 15px 0;
  
  
  &:hover{
    opacity: 0.5;
    background-color: rgba(255,4,80,1);
    color: white;
    box-shadow: 0 0 30px rgba(0,0,0,0.5);
  }
  
  &:disabled {
    opacity: 0.4;
    background-color: transparent;
    color: palevioletred;
    cursor: not-allowed;
  }
`

type Buttons = {
    propsWidth: number
    title: string
    onClickHandler: () => void
    disabled?: boolean
}

export const Button = ({title, onClickHandler, disabled, propsWidth}: Buttons) => {
    return (
        <>
            <ButtonStyled   pw={propsWidth}
                            disabled={disabled}
                            onClick={onClickHandler}>
                {title}
            </ButtonStyled>
        </>
    );
};

