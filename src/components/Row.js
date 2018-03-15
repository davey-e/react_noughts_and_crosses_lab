import React from 'react';
import Square from './Square.js';
import './Row.css';

const Row = (props) => {

    const squareElements = props.squares.map((square, index) => {
        return <Square key={index} colour={square.colour} />
    })

    return(
        <div className="row" id={`row-${props.rowNumber}`}>
            {squareElements}
        </div>
    )

}

export default Row;