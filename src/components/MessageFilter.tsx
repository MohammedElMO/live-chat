import { ReactNode } from "react";
import { Choice, useChatStore } from "../store/chatTrackStore";

type Props = {
  filterName: string;
  activeFilter: Choice;
  icon?: ReactNode;
};

const filterColors: Record<Choice, string> = {
  answred: "bg-answred",
  masked: "bg-masked",
  "yet-to-answer": "bg-yet-to-answer",
  "no-filter": "bg-no-filter",
};

function MessageFilter({ filterName, icon, activeFilter }: Props) {
  const { currentFilter, setCurrentFilter } = useChatStore();
  const filterStyle =
    currentFilter === activeFilter
      ? filterColors[currentFilter].concat(" text-white ")
      : "";

  return (
    <div
      onClick={() => setCurrentFilter(activeFilter)}
      className={`flex ${filterStyle}  items-center font-semibold text-lg shadow-lg font-roboto gap-2 rounded-lg p-3 cursor-pointer px-5  `}
    >
      {icon}
      <span>{filterName}</span>
    </div>
  );
}

export default MessageFilter;
