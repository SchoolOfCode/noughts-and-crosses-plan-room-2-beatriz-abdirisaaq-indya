import React from "react";
import Square from "../Square";
import "./board.css";

function Board({ onClick, squares }) {
  return (
    <div className="board">
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
}

export default Board;
