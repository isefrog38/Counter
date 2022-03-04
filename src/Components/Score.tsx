import React, {useEffect} from 'react';
import {Table} from "./StyledComp/Styles";
import styled from "styled-components";

type ScoreType = {
    value: number
    error: boolean
    maxValue: number
    errorMessage: string
}

const Score = ({maxValue, error, value, errorMessage}: ScoreType) => {

    const lastNumb = value < maxValue;
    let color = !lastNumb ? "red" : "white";

    return (
        <>
            <Table>
                { error
                    ? <ErrorText>{errorMessage}</ErrorText>
                    : <TextStyled cp={color}>{value}</TextStyled>
                }

            </Table>
        </>
    );
};


type ColorType = {
    cp: string
}
export const TextStyled = styled.span<ColorType>`
    font-size: 80px;
    color: ${({cp}) => cp ? cp : `white` };
`
export const ErrorText = styled.h3`
    color: red;
    font-size: 40px;
    display: flex;
    text-align: center;
    justify-content: center;
`


export default Score;