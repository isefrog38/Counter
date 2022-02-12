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
export const ErrorText = styled.div<TextType>`
    color: red;
    font-size: 40px;
`

type ScoreType = {
    number: number
    lastNumb: boolean
}

const Score = ({number, lastNumb}: ScoreType) => {

    let color = !lastNumb ? "red" : "white";



    return (
        <>
            <Table>
                <TextStyled cp={color} >{number}</TextStyled>
            </Table>
        </>
    );
};

export default Score;