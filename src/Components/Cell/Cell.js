import React, { Component } from 'react'; 
import './Cell.css';

class Cell extends Component {
    constructor(props) {
        super(props); 

    }

    render() {
        let cellClasses = 'cell'; 
        let cellContentClasses = 'cell-content'; 

        if(this.props.canHighlight) {
            cellClasses += ' winner'
        }
        if(this.props.value){
            cellContentClasses =+ ' populated'
        }

        return (
            <button className={this.props.canHighlight ? 'cell winner' : 'cell'}>
                <span className={this.props.value ? 'cell-content populated' : 'cell-content'}>{this.props.value}</span>
            </button>
        );
    }
}

export default Cell; 