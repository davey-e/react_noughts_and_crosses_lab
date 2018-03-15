import React, {Component} from 'react';
import Square from '../components/Square.js';
class Board extends Component{

    constructor(props){
        super(props);
        this.state= {
            squares: []
        }
    }

    componentDidMount(){
        this.populateSquares();
    }

    populateSquares(){
        const newSquares = [];
        for(let i=0; i<9; i++){
            const square = {
                colour: "white-square"
            }
            newSquares.push(square);
        }
        this.setState({squares: newSquares});
    }

    render(){

        const squareElements = this.state.squares.map((square, index) => {
            return <Square key={index} colour={square.colour} />
        })

        return(
            squareElements
        )
    }



}

export default Board;