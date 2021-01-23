import React, { Component } from 'react'; 
import './Cell.css';

class Cell extends Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <button className={this.props.canHighlight ? 'cell winner' : 'cell'} onClick={this.props.onClick}>
                <span className={this.props.value ? 'cell-content populated' : 'cell-content'}>{this.props.value}</span>
            </button>
        );
    }
}

export default Cell; 