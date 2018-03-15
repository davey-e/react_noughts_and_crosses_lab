import React from 'react';

const BoardHeader = (props) => {
    const colourSplit = props.activeColour.split("");
    const firstLetter = colourSplit[0].toUpperCase();
    colourSplit[0] = firstLetter;
    const colour = colourSplit.join(""); 

    if(props.gameWon){
        return(
            <header>
                <h1>{colour} Player Has Won!</h1>
                <button>Reset Game</button>
            </header>
        )
    } else {
        return(
            <header>
                <h1>{colour} Player's Turn</h1>
            </header>
        )
    }
}

export default BoardHeader;