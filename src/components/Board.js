import React from "react";
import Square from "./Square";

function Board() {
  return (
    <div>
      <div className="square-layout">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

export default Board;
