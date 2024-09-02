import { useGameContext } from "../../context/GameContext";

const selectHand = ({ hand }: { hand: string }) => {
  const { setPlayerHand } = useGameContext();

  setPlayerHand(hand);

  return <div>selectHand</div>;
};

export default selectHand;
