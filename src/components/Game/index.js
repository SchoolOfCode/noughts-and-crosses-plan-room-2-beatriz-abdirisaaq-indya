import Board from "../Board";
import { useState } from "react";
import WinnerSection from "../Winner";
import calculateWinner from "../helper";

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  function handleClick(i) {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  }

  return (
    <div>
      <Board squares={board} onClick={handleClick} />
      <p>
        {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
      </p>
    </div>
  );
}

export default Game;
