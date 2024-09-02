import { useGameContext } from "../../context/GameContext";
import Paper from "../Icons/Paper";
import Scissors from "../Icons/Scissors";
import Rock from "../Icons/Rock";
import { useEffect, useState } from "react";
import WinnerBg from "../Icons/WinnerBg";

const SecondStep = () => {
  const {
    playerHand,
    houseHand,
    setWinner,
    winner,
    setWinCount,
    setHouseHand,
    setPlayerHand,
    setCurrentStep,
    showResult,
    setShowResult,
    winCount,
  } = useGameContext();
  const [shouldRenderResult, setShouldRenderResult] = useState(false);

  const handleGameReset = () => {
    setWinner("");
    setHouseHand("");
    setPlayerHand("");
    setCurrentStep(1);
    setShowResult(false);
    setShouldRenderResult(false);
  };

  useEffect(() => {
    localStorage.setItem("winCount", winCount.toString());
  }, [winCount]);

  useEffect(() => {
    if (!showResult) return;

    setShouldRenderResult(true);

    if (winner == "player") setWinCount((prev) => prev + 1);
  }, [showResult]);

  const handleHands = (hands: string) => {
    if (hands == "scissors") return <Scissors width="292px" height="300px" />;
    if (hands == "rock") return <Rock width="292px" height="300px" />;
    return <Paper width="292px" height="300px" />;
  };

  return (
    <div className="mx-auto mt-[167px] relative flex flex-col items-center justify-center">
      <div className="flex"></div>
      <div
        className={`flex items-center ${
          shouldRenderResult ? "gap-x-[55px]" : "gap-x-[106px]"
        }`}
      >
        <div className="flex flex-col items-center relative">
          <h2 className="font-bold text-[24px] leading-[24px] uppercase tracking-[3px] text-white absolute -top-[83px] left-1/2 -translate-x-2/4">
            You picked
          </h2>
          <div className="relative">
            {shouldRenderResult && winner == "player" ? <WinnerBg /> : null}
            {handleHands(playerHand)}
          </div>
        </div>
        {shouldRenderResult && (
          <div className="-mt-[40px]">
            <div className="text-center text-[56px] font-bold text-[#ffffff] mb-[10px] uppercase">
              {winner == "player"
                ? "You win"
                : winner == "tie"
                ? "Tie"
                : "You lose"}
            </div>
            <button
              onClick={handleGameReset}
              className="shadow-custom bg-custom-gradient w-[220px] h-[48px] font-semibold text-[16px] tracking-[2.5px] uppercase rounded-[8px] text-[#3B4262]"
            >
              Play again
            </button>
          </div>
        )}
        <div className="relative">
          <h2
            className={`w-[231px] font-bold text-[24px] leading-[24px] uppercase tracking-[3px] text-white absolute ${
              shouldRenderResult ? "-top-[83px]" : "-top-[122px]"
            } left-1/2 -translate-x-2/4`}
          >
            The house picked
          </h2>
          <div className="relative">
            {shouldRenderResult && winner == "computer" ? <WinnerBg /> : null}
            {shouldRenderResult ? (
              handleHands(houseHand)
            ) : (
              <div className="w-[224px] h-[224px] bg-black bg-opacity-10 rounded-full" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
