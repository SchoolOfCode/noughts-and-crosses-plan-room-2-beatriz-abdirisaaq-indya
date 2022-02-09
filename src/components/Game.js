import Board from "./Board";
import WinnerSection from "./WinnerSection";
import ResetButton from "./ResetButton";

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
