import React, {Component} from 'react';
import Row from '../components/Row.js';
class Board extends Component{

    constructor(props){
        super(props);
        this.state= {
            rows: []
        }

        this.handleSquareClick = this.handleSquareClick.bind(this);
    }

    componentDidMount(){
        this.populateRows();
    }

    populateRows(){
        const newRows = [];
        for(let i=0; i<3; i++){
            const row = this.createSquares();
            newRows.push(row);
        }
        this.setState({rows: newRows});
    }

    createSquares(){
        const row = [];
        for(let i=0; i < 3; i++){
            const square = {
                colour: "white-square"
            }
            row.push(square)
        }
        return row;
    }

    handleSquareClick(rowIndex, squareIndex){
        const allRows = this.state.rows;
        const requiredRow = allRows[rowIndex];
        const requiredSquare = requiredRow[squareIndex];
        requiredSquare.colour = "blue-square";
        this.setState({rows: allRows});
    }

    render(){

        const rowElements = this.state.rows.map((rowSquares, index) => {
            return <Row key={index} squares={rowSquares} rowNumber={index} handleSquareClick={this.handleSquareClick} />
        })

        return(
            <div className="board">
                {rowElements}
            </div>
        )
    }



}

export default Board;