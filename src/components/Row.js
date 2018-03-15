import React from 'react';
import Square from './Square.js';
import './Row.css';

const Row = (props) => {

    const onSquareClick = (squareInfo) => {
        props.handleSquareClick(props.rowNumber, squareInfo);
    }

    const squareElements = props.squares.map((square, index) => {
        return <Square key={index} squareNumber={index} 
                colour={square.colour} handleClick={onSquareClick}/>
    })

    return(
        <div className="row">
            {squareElements}
        </div>
    )

}

export default Row;