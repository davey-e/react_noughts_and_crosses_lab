import React, {Component} from 'react';
import Row from '../components/Row.js';
class Board extends Component{

    constructor(props){
        super(props);
        this.state= {
            rows: []
        }
    }

    componentDidMount(){
        this.populateRows();
    }

    populateRows(){
        const newRows = [];
        for(let i=0; i<3; i++){
            const row = [];
            const square = {
                colour: "white-square"
            }
            row.push(square);
            row.push(square);
            row.push(square);
            newRows.push(row);
        }
        this.setState({rows: newRows});
    }

    render(){

        const rowElements = this.state.rows.map((rowSquares, index) => {
            return <Row key={index} squares={rowSquares} rowNumber={index} />
        })

        return(
            <div className="board">
                {rowElements}
            </div>
        )
    }



}

export default Board;