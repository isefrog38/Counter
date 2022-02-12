import React from 'react';
import {Table} from "./StyledComp/Styles";
import styled from "styled-components";

type ColorType = {
    cp: string
}
type TextType = {
    textError: any
}

export const TextStyled = styled.span<ColorType>`
    font-size: 80px;
    color: ${({cp}) => cp ? cp : `white` };
`
export const ErrorText = styled.h4<TextType>`
    color: red;
    font-size: 40px;
`

type ScoreType = {
    number: number
    lastNumb: boolean
    textError: any
}

const Score = ({textError, number, lastNumb}: ScoreType) => {

    let color = !lastNumb ? "red" : "white";
    let componentTag = textError ?  <ErrorText>{titleError}</ErrorText> : <TextStyled cp={color} >
        {number}
    </TextStyled>;


    return (
        <>
            <Table>
                {componentTag}
            </Table>
        </>
    );
};

export default Score;