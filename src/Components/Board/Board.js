import React, { Component } from 'react'; 
import Cell from '../Cell/Cell';
import './Board.css';

class Board extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const cells = this.props.cellValues.map((value, index) => {
            const canHighlight = this.props.winningCombination && 
                                 this.props.winningCombination.indexOf(index) >= 0; 
            return <Cell value={value} key={index} canHighlight={canHighlight}/>
        }); 

        return (
            <div id="board">
                {cells}
            </div>
        );
    }
}

export default Board; 