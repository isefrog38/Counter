import React from 'react';

type ScoreType = {
    state: number
}

const Score = ({state}: ScoreType) => {

    const colorText= state === 5 ? "redColor" : "";

    return (
        <>
            <div className={"Table"}>
                        <span className={colorText}>
                            {state}
                        </span>
            </div>
        </>
    );
};

export default Score;