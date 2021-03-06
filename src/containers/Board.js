import React, {Component} from 'react';
import Row from '../components/Row.js';
import BoardHeader from '../components/BoardHeader.js';
class Board extends Component{

    constructor(props){
        super(props);
        this.state= {
            rows: [],
            activeColour: null,
            gameWon: null
        }

        this.handleSquareClick  = this.handleSquareClick.bind(this);
        this.handleGameReset    = this.handleGameReset.bind(this);
    }

    componentDidMount(){
        this.setupBoard();
    }

    setupBoard(){
        const rows = this.populateRows();
        this.setState({rows: rows, activeColour: "blue", gameWon: false});
    }

    populateRows(){
        const newRows = [];
        for(let i=0; i<3; i++){
            const row = this.createSquares();
            newRows.push(row);
        }
        return newRows;
    }

    createSquares(){
        const row = [];
        for(let i=0; i < 3; i++){
            const square = {
                colour: "white"
            }
            row.push(square)
        }
        return row;
    }

    swapActiveColour(){
        return this.state.activeColour === "blue" ? "red" : "blue";
    }

    handleSquareClick(rowIndex, squareIndex){
        const allRows = this.state.rows;
        const requiredRow = allRows[rowIndex];
        const requiredSquare = requiredRow[squareIndex];

        if(requiredSquare.colour !== "white") return;
        if(this.state.gameWon) return;
        
        requiredSquare.colour = this.state.activeColour;
        const newActiveColour = this.swapActiveColour();
        const gameWon = this.checkIfWinnerExists(allRows);

        console.log("Game Result", gameWon);
        if(gameWon){
            this.setState({rows: allRows, gameWon: gameWon});
        } else {
            this.setState({rows: allRows, activeColour: newActiveColour, gameWon: gameWon});
        }
    }

    checkIfWinnerExists(allRows){

        const rowOne = allRows[0];
        const rowTwo = allRows[1];
        const rowThree = allRows[2];
        
        const columnOne     = [allRows[0][0], allRows[1][0], allRows[2][0]];
        const columnTwo     = [allRows[0][1], allRows[1][1], allRows[2][1]];
        const columnThree   = [allRows[0][2], allRows[1][2], allRows[2][2]];

        const topLeftDiagonal       = [allRows[0][0], allRows[1][1], allRows[2][2]];
        const bottomLeftDiagonal    = [allRows[2][0], allRows[1][1], allRows[0][2]];

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

        if (squareOne.colour === "white" || squareTwo.colour === "white" || squareThree.colour === "white") return false;

        if(squareOne.colour === squareTwo.colour && squareTwo.colour === squareThree.colour){
            return true;
        } else {
            return false;
        }
    }

    handleGameReset(){
        this.setupBoard();
    }

    render(){

        const rowElements = this.state.rows.map((rowSquares, index) => {
            return <Row key={index} squares={rowSquares} rowNumber={index} handleSquareClick={this.handleSquareClick} />
        })

        return(
            <div className="board">
                <BoardHeader activeColour={this.state.activeColour} gameWon={this.state.gameWon} handleReset={this.handleGameReset}/>
                {rowElements}
            </div>
        )
    }



}

export default Board;