import React from 'react';
import {Table} from "./StyledComp/Styles";

type ScoreType = {
    state: number
}

const Score = ({state}: ScoreType) => {

    const colorText= state === 5 ? "redColor" : "";

    return (
        <>
            <Table>
                <span className={colorText}>
                    {state}
                </span>
            </Table>
        </>
    );
};

export default Score;