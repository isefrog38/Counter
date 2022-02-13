import React, {useEffect} from 'react';
import {Table} from "./StyledComp/Styles";
import styled from "styled-components";

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

type ScoreType = {
    number: number
    error: boolean
    maxValue: number
    errorMessage: string
}

const Score = ({maxValue, error, number, errorMessage}: ScoreType) => {

    const lastNumb = number < maxValue;
    let color = !lastNumb ? "red" : "white";

    return (
        <>
            <Table>
                { error
                    ? <ErrorText>{errorMessage}</ErrorText>
                    : <TextStyled cp={color}>{number}</TextStyled>
                }

            </Table>
        </>
    );
};

export default Score;