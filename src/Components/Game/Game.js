import React, { useState } from 'react'; 
import Board from '../Board/Board';
import ResultModal from '../ResultModal/ResultModal';
import calculateWinner from '../../Utils/Utils';
import '../../App.css'; 

const Game = () => {
    const [cellValues, setCellValues] = useState(['', '', '', '', '', '', '', '', ''])
    const [xIsNext, setXIsNext] = useState(true); 
    const winningCombination = []
    const [isGameOver, setIsGameOver] = useState(false); 
    const [numberOfTurnsLeft, setNumberOfTurnsLeft] = useState(9); 
    const [winner, setWinner] = useState(); 

    const cellClicked = (cellIndex) => {
        const newCellValues = [...cellValues]; 

        if(newCellValues[cellIndex] === '') {
            newCellValues[cellIndex] = xIsNext ? 'X' : 'O'

            const newNumberOfTurnsleft = numberOfTurnsLeft - 1; 
            // Calculate the result 
            const calcResult = calculateWinner(newCellValues, newNumberOfTurnsleft, cellIndex); 

            setCellValues(newCellValues); 
            setXIsNext(!xIsNext); 
            setIsGameOver(calcResult.hasResult); 
            setNumberOfTurnsLeft(newNumberOfTurnsleft);
            setWinner(calcResult.winner)
        }
    }

    const restartGame = () => {
        setCellValues(['', '', '', '', '', '', '', '', '']); 
        setXIsNext(true); 
        setIsGameOver(false); 
        setNumberOfTurnsLeft(9);
        setWinner(undefined)
    }

    return (
        <>
            <div id="game">
                <h1>Tic Tac Toe</h1>
                <Board cellValues={cellValues} winningCombination={winningCombination} cellClicked={cellClicked}/>
            </div>
            <ResultModal isGameOver={isGameOver} winner={winner} onNewGameClicked={restartGame}/>
        </>
    );
} 

export default Game; 