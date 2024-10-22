import { ReactNode } from "react";
import { Choice, useChatStore } from "../store/chatTrackStore";

type Props = {
  filterName: string;
  activeFilter: Choice;
  icon: ReactNode;
};
const filterColors: Record<Choice, string> = {
  answred: "#4BB95C",
  masked: "#1D00FF",
  "yet-to-answer": "#FF0000",
  "no-filter": "#000000",
};

function MessageFilter({ filterName, icon, activeFilter }: Props) {
  const { currentFilter, setCurrentFilter } = useChatStore();
  const filterStyle = Object.keys(filterColors).find(
    (f) => f === currentFilter
  );
  return (
    <div
      onClick={() => setCurrentFilter(activeFilter)}
      className={`flex ${
        currentFilter === activeFilter ? ` bg-${filterStyle} text-white` : ""
      } font-semibold text-lg shadow-lg font-roboto gap-2 bg-white rounded-lg p-3 cursor-pointer px-5  `}
    >
      {icon}
      <span>{filterName}</span>
    </div>
  );
}

export default MessageFilter;
