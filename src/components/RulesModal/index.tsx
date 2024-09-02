import { useGameContext } from "../../context/GameContext";
import ModalClose from "../Icons/ModalClose";
import Rules from "../Icons/Rules";

const RulesModal = () => {
  const { setOpenRules, openRules } = useGameContext();

  return (
    openRules && (
      <>
        <div className="bg-white rounded-[8px] shadow-custom flex flex-col items-center absolute left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4 z-20 p-[32px]">
          <div className="flex items-center justify-between w-full mb-[48px]">
            <h2 className="text-[#3B4262] uppercase text-[32px] leading-[32px] font-bold">Rules</h2>
            <button onClick={() => setOpenRules(false)}>
              <ModalClose />
            </button>
          </div>
          <Rules />
        </div>
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setOpenRules(false)}
        />
      </>
    )
  );
};

export default RulesModal;
