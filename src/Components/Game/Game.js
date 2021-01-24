import React, { useState } from 'react'; 
import Board from '../Board/Board';
import ResultModal from '../ResultModal/ResultModal';
import calculateWinner from '../../Utils/Utils';
import '../../App.css'; 

const Game = () => {
    const [cellValues, setCellValues] = useState(['', '', '', '', '', '', '', "", ""])
    const [xIsNext, setXIsNext] = useState(true); 
    const winningCombination = []
    const [isGameOver, setIsGameOver] = useState(false); 
    //this.state = { isGameOver: false }

    

    const cellClicked = (cellIndex) => {
        const newCellValues = [...cellValues]; 

        if(newCellValues[cellIndex] === '') {
            newCellValues[cellIndex] = xIsNext ? 'X' : 'O'

            // Calculate the result 
            const calcResult = calculateWinner(newCellValues, cellIndex); 

            setCellValues(newCellValues); 
            setXIsNext(!xIsNext); 
            setIsGameOver(calcResult.hasResult); 
        }
    }

    return (
        <>
            <div id="game">
                <h1>Tic Tac Toe</h1>
                <Board cellValues={cellValues} winningCombination={winningCombination} cellClicked={cellClicked}/>
            </div>
            <ResultModal isGameOver={isGameOver}/>
        </>
    );
} 

export default Game; 