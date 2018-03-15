import React from 'react';

const BoardHeader = (props) => {
    if(props.activeColour === null) return null;
    const colourSplit = props.activeColour.split("");
    const firstLetter = colourSplit[0].toUpperCase();
    colourSplit[0] = firstLetter;
    const colour = colourSplit.join(""); 

    if(props.gameWon){
        return(
            <header>
                <h1>{colour} Player Has Won!</h1>
                <button onClick={props.handleReset}>Reset Game</button>
            </header>
        )
    } else {
        return(
            <header>
                <h1>{colour} Player's Turn</h1>
                <button onClick={props.handleReset}>Reset Game</button>
            </header>
        )
    }
}

export default BoardHeader;