import { ReactNode } from "react";
import { Dispatch, SetStateAction } from "react";

export interface IGameContext {
  playerHand: string;
  setPlayerHand: Dispatch<SetStateAction<string>>;
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  winner: string;
  setWinner: Dispatch<SetStateAction<string>>;
  houseHand: string;
  setHouseHand: Dispatch<SetStateAction<string>>;
  winCount: number;
  setWinCount: Dispatch<SetStateAction<number>>;
  showResult: boolean;
  setShowResult: Dispatch<SetStateAction<boolean>>;
  openRules: boolean;
  setOpenRules: Dispatch<SetStateAction<boolean>>;
}

export interface IGameContextProvider {
  children: ReactNode;
}