import React from 'react';
import './Square.css';

const Square = (props) => {

    const callOnClick = () => {
        props.handleClick(props.squareNumber)
    }

    return <div className={props.colour} onClick={callOnClick}/>
}

export default Square;