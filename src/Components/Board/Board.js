import React, { Component } from 'react'; 
import Cell from '../Cell/Cell';
import './Board.css';

class Board extends Component {
    render() {
        const cellValues = ['X', 'X', 'X', 'O', 'O', 'X', 'O', "", ""]
        const cells = cellValues.map((value, index) => <Cell value={value} key={index} canHighlight={false}/>)
        return (
            <div id="board">
                {cells}
            </div>
        );
    }
}

export default Board; 