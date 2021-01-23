import React, { useState } from 'react'; 
import Board from '../Board/Board';
import '../../App.css'; 

const Game = () => {
    const [cellValues, setCellValues] = useState(['', '', '', '', '', '', '', "", ""])
    const winningCombination = []

    const cellClicked = (cellIndex) => {
        const newCellValues = [...cellValues]; 
        newCellValues[cellIndex] = 'X'
        setCellValues(newCellValues); 
    }

    return (
        <>
        <div id="game">
            <h1>Tic Tac Toe</h1>
            <Board cellValues={cellValues} winningCombination={winningCombination} cellClicked={cellClicked}/>
        </div>

        <div id="modal-overlay">
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
        </>
    );
} 

export default Game; 