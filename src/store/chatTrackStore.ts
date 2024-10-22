import { create } from "zustand";

export type Choice = "answred" | "masked" | "yet-to-answer" | "no-filter";

type ChatStore = {
  currentFilter: Choice;
  setCurrentFilter: (choice: Choice) => void;
};

const useChatStore = create<ChatStore>((set) => ({
  currentFilter: "no-filter",
  setCurrentFilter: (selectedFilter) =>
    set(() => ({ currentFilter: selectedFilter })),
}));

export { useChatStore };
