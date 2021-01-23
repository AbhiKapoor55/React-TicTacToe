import React, { Component } from 'react'; 
import Cell from '../Cell/Cell';
import './Board.css';

class Board extends Component {
    render() {
        return (
            <div id="board">
                <Cell value="X" canHighlight={true}/>
                <Cell value="X" canHighlight={true}/>
                <Cell value="X" canHighlight={true}/>
                <Cell value="O" canHighlight={false}/>
                <Cell value="O" canHighlight={false}/>
                <Cell value="X" canHighlight={false}/>
                <Cell value="O" canHighlight={false}/>
                <Cell value="" canHighlight={false}/>
                <Cell value="" canHighlight={false}/>
            </div>
        );
    }
}

export default Board; 