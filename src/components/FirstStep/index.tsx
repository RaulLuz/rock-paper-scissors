import Rock from "../Icons/Rock";
import TriangleBg from "../Icons/TriangleBg";
import Scissors from "../Icons/Scissors";
import Paper from "../Icons/Paper";
import { useGameContext } from "../../context/GameContext";
import { hands } from "../api/hands";

const FirstStep = () => {
  const {
    setPlayerHand,
    setCurrentStep,
    setHouseHand,
    setShowResult,
    setWinner,
  } = useGameContext();

  const handleHandSelection = (hand: string) => {
    const housePick = hands[Math.floor(Math.random() * hands.length)];

    setHouseHand(housePick.name);
    setPlayerHand(hand);
    setCurrentStep(2);

    setTimeout(() => {
      const currentPlayerHand = hand;
      const currentHouseHand = housePick.name;

      setShowResult(true);

      setWinner(() => {
        const playerLost =
          hands.find((item) => item.name === currentPlayerHand)
            ?.losesAgainst === housePick.name;

        if (currentPlayerHand == currentHouseHand) return "tie";

        return playerLost ? "computer" : "player";
      });
    }, 2000);
  };

  return (
    <div className="w-[476px] h-[430px] mx-auto mt-[64px] relative flex items-center justify-center">
      <TriangleBg />
      <div
        className="absolute top-0 left-0"
        onClick={() => handleHandSelection("paper")}
      >
        <Paper width="198px" height="203px" />
      </div>
      <div
        className="absolute top-0 right-0"
        onClick={() => handleHandSelection("scissors")}
      >
        <Scissors width="198px" height="203px" />
      </div>
      <div
        className="absolute bottom-0 left-1/2 -translate-x-2/4"
        onClick={() => handleHandSelection("rock")}
      >
        <Rock width="198px" height="203px" />
      </div>
    </div>
  );
};

export default FirstStep;
