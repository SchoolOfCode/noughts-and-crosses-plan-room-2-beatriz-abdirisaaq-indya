import React from "react";
import Square from "../Square";
import '../square.css'

function Board({ onClick, squares }) {
  return (
    <div>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
}

export default Board;
