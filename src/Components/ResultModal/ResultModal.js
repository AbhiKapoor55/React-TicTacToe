import React, { Component } from 'react'; 
import '../../Components/Cell/Cell.css';

class ResultModal extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="modal-overlay" className={this.props.isGameOver ? 'modal-open' : ''}>
                <div id="game-result-modal">
                    <div id="result-container">
                        <div id="winner-container">
                            <span></span>
                        </div>
                    </div>
                    <div id="new-game-container">
                        <button id="new-game-button">Start New Game</button>
                    </div>
                </div>
        </div>
        );
    }
}

export default ResultModal; 