import React, {Component} from 'react';
import Row from '../components/Row.js';
class Board extends Component{

    constructor(props){
        super(props);
        this.state= {
            rows: [],
            activeColour: "blue-square"
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

    swapActiveColour(){
        return this.state.activeColour === "blue-square" ? "red-square" : "blue-square";
    }

    handleSquareClick(rowIndex, squareIndex){
        const allRows = this.state.rows;
        const requiredRow = allRows[rowIndex];
        const requiredSquare = requiredRow[squareIndex];

        if(requiredSquare.colour !== "white-square") return;
        
        requiredSquare.colour = this.state.activeColour;
        const newActiveColour = this.swapActiveColour();
        this.setState({rows: allRows, activeColour: newActiveColour});
        console.log("Game Result", this.checkIfWinnerExists());
    }

    checkIfWinnerExists(){

        const rowOne = this.state.rows[0];
        const rowTwo = this.state.rows[1];
        const rowThree = this.state.rows[2];
        
        const columnOne     = [this.state.rows[0][0], this.state.rows[1][0], this.state.rows[2][0]];
        const columnTwo     = [this.state.rows[0][1], this.state.rows[1][1], this.state.rows[2][1]];
        const columnThree   = [this.state.rows[0][2], this.state.rows[1][2], this.state.rows[2][2]];

        const topLeftDiagonal       = [this.state.rows[0][0], this.state.rows[1][1], this.state.rows[2][2]];
        const bottomLeftDiagonal    = [this.state.rows[2][0], this.state.rows[1][1], this.state.rows[0][2]];

        const squaresToCheck = [rowOne, rowTwo, rowThree, columnOne, 
                                columnTwo, columnThree, topLeftDiagonal, bottomLeftDiagonal];
        
        let winnerExists = false;                                
        squaresToCheck.forEach(squares => {
            if(this.checkSquareColoursMatch(squares)){
                winnerExists = true;
                return;
            }
        })

        return winnerExists;
    }

    checkSquareColoursMatch(squares){
        const squareOne = squares[0];
        const squareTwo = squares[1];
        const squareThree = squares[2];

        if (squareOne.colour === "white-square" || squareTwo.colour === "white-square" || squareThree.colour === "white-square") return false;

        if(squareOne.colour === squareTwo.colour && squareTwo.colour === squareThree.colour){
            return true;
        } else {
            return false;
        }
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