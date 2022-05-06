import { useEffect, useState } from 'react';
import './App.css';
import SqaureComponent from './component/SqaureComponent';

//initail state
const clearState = ["", "", "", "", "", "", "", "", ""];

function App() {

  // update game state
  const [gameState, updateGameState] = useState(clearState);

  // set x chance
  const [isXChance, updateIsXChance] = useState(false);

  //user clicked
  const onUserClicked = (index) => {
    let strings = Array.from(gameState);
    if (strings[index])
        return;
    strings[index] = isXChance ? "X" : "0"; // x and o state
    updateIsXChance(!isXChance)
    updateGameState(strings)
  }

  // clear state
  const clearGame = () => {
    updateGameState(clearState)
  }

  //render state
  useEffect(() => {
    let winner = checkWinner();//check winner
    if (winner) {
        clearGame();
        alert(`Ta da ! ${winner} won the Game !`)
    }
  }, [gameState])

  //check winner
  const checkWinner = () => {
      const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
      ];
      console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
      for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
              return gameState[a];
          }
      }
      return null;
  }

  return (
    <div className="app-header">
      <p className="heading-text"> React tic tac toe </p>

      <div className="row jc-center">
        <SqaureComponent className="b-bottom-right" onClick={() => onUserClicked(0)} state={gameState[0]} />
        <SqaureComponent className="b-bottom-right" onClick={() => onUserClicked(1)} state={gameState[1]} />
        <SqaureComponent className="b-bottom" onClick={() => onUserClicked(2)} state={gameState[2]}  />
      </div>

      <div className="row jc-center">
        <SqaureComponent className="b-bottom-right" onClick={() => onUserClicked(3)} state={gameState[3]} />
        <SqaureComponent className="b-bottom-right" onClick={() => onUserClicked(4)} state={gameState[4]} />
        <SqaureComponent className="b-bottom" onClick={() => onUserClicked(5)} state={gameState[5]} />
      </div>

      <div className="row jc-center">
        <SqaureComponent className="b-right" onClick={() => onUserClicked(6)} state={gameState[6]} />
        <SqaureComponent className="b-right" onClick={() => onUserClicked(7)} state={gameState[7]} />
        <SqaureComponent onClick={() => onUserClicked(8)} state={gameState[8]} />
      </div>

      <button className="btn clear-button" onClick={clearGame}>Clear Game</button>
    </div>
  );
}

export default App;
