import React, {Component} from 'react';

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

        return(
            null
        )
    }



}

export default Board;