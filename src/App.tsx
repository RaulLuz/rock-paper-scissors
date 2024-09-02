import FirstStep from "./components/FirstStep";
import RulesModal from "./components/RulesModal";
import SecondStep from "./components/SecondStep";
import { useGameContext } from "./context/GameContext";

function App() {
  const { currentStep, winCount, setWinCount, setOpenRules } = useGameContext();

  return (
    <>
      <div className="w-full min-w-[700px] mt-[48px]">
        <div
          className="w-full max-w-[700px] mx-auto flex items-center justify-between py-[18px] px-[24px] border-[3px] border-white rounded-[15px]"
          style={{
            borderWidth: "3px",
            borderColor: "rgba(255, 255, 255, 0.29)",
            borderStyle: "solid",
          }}
        >
          <img src="/logo.svg" alt="Rock, Paper, Scissors" />
          <div className="h-[114px] w-[150px] flex items-center justify-center flex-col bg-custom-gradient shadow-custom rounded-[8px]">
            <div className="text-[16px] font-semibold tracking-[2.5px] uppercase text-[#2A45C2]">
              Score
            </div>
            <div className="text-[64px] font-bold text-[#565468] leading-[60px]">
              {winCount}
            </div>
          </div>
        </div>

        {currentStep === 1 ? <FirstStep /> : <SecondStep />}

        <div className="absolute bottom-[32px] right-[32px]">
          <button
            className="text-[16px] tracking-[2.5px] font-semibold text-white uppercase py-[10px] px-[37px] rounded-[8px] border border-1 border-white mr-[20px]"
            onClick={() => setWinCount(0)}
          >
            Reset Score
          </button>
          <button
            className="text-[16px] tracking-[2.5px] font-semibold text-white uppercase py-[10px] px-[37px] rounded-[8px] border border-1 border-white"
            onClick={() => setOpenRules(true)}
          >
            Rules
          </button>
        </div>
      </div>

      <RulesModal />
    </>
  );
}

export default App;
