import React from "react";

const style = {
  background: "white",
  border: "2px solid black",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};

function Square({value, onClick}) {
  return (
    <button style={style} onClick={onClick}>{value}</button>
  );
}

export default Square;
