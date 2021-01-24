import React, { Component } from 'react'; 
import '../../Components/Cell/Cell.css';

class ResultModal extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const message = this.props.winner ? `Winner is ${this.props.winner}.` : "It is a tie"; 
        return (
            <div id="modal-overlay" className={this.props.isGameOver ? 'modal-open' : ''}>
                <div id="game-result-modal">
                    <div id="result-container">
                        <div id="winner-container">
                            <span>{message}</span>
                        </div>
                    </div>
                    <div id="new-game-container">
                        <button id="new-game-button" onClick={this.props.onNewGameClicked}>Start New Game</button>
                    </div>
                </div>
        </div>
        );
    }
}

export default ResultModal; 