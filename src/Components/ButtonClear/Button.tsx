import React from 'react';
import styled from "styled-components";


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


type PropsTypeSC = {
    pw: number
};
const ButtonStyled = styled.button<PropsTypeSC>`
  color: #ffffff;
  padding: 5px 40px;
  border: 2px dashed #ffffff;
  border-radius: 15px;
  width: ${({pw}) => pw ?  pw : 40}%;
  height: 70px;
  font-size: 40px;
  font-weight: bold;
  font-style: oblique;
  margin: 0 15px 15px 0;
  background-color: rgba(0, 0, 0, 0.51);
  
  
  &:hover{
    opacity: 0.7;
    border: 3px solid #ffff;
    background-color: rgba(255, 0, 0, 0.6));
    color: white;
    box-shadow: 0 0 30px rgba(0,0,0,0.5);
  }
  
  &:disabled {
    opacity: 0.2;
    background-color: transparent;
    color: #ffffff;
    cursor: not-allowed;
  }
`;