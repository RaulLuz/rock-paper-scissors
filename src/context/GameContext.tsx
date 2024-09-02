import { createContext, useState, useContext, useEffect } from "react";
import { IGameContext, IGameContextProvider } from "./GameContext.d";

export const GameContext = createContext({} as IGameContext);

export function GameContextProvider({ children }: IGameContextProvider) {
  const [playerHand, setPlayerHand] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [winner, setWinner] = useState("");
  const [houseHand, setHouseHand] = useState("");
  const [winCount, setWinCount] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [openRules, setOpenRules] = useState(false);

  useEffect(() => {
    const storedWinCount = parseFloat(localStorage.getItem("winCount") ?? "0");
    setWinCount(storedWinCount);
  }, []);

  return (
    <GameContext.Provider
      value={{
        playerHand,
        setPlayerHand,
        currentStep,
        setCurrentStep,
        winner,
        setWinner,
        houseHand,
        setHouseHand,
        winCount,
        setWinCount,
        showResult,
        setShowResult,
        openRules,
        setOpenRules,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export const useGameContext = () => useContext(GameContext);
