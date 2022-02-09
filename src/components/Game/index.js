import Board from "../Board";
import WinnerSection from "../Winner";
import ResetButton from "../ResetButton";

function Game() {
  return (
    <div>
      <Board onClick={()=>{}} />
      <WinnerSection />
      <ResetButton />
    </div>
  );
}

export default Game;
