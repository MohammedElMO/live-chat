import { create } from "zustand";

export type Choice = "answred" | "masked" | "yet-to-answer" | "no-filter";

export type Message = {
  message: string;
};

type ChatStore = {
  currentFilter: Choice;
  setCurrentFilter: (choice: Choice) => void;
  room: string;
  setRoom: (roomeName: string) => void;

  userChat: Message[];
  setUserChat: (chat: Message[]	) => void;
};

const useChatStore = create<ChatStore>((set) => ({
  currentFilter: "no-filter",
  setCurrentFilter: (selectedFilter) =>
    set(() => ({ currentFilter: selectedFilter })),
  room: "",
  setRoom: (room) => set(() => ({ room })),
  userChat: [],
  setUserChat: (chat) => {
    set(() => ({ userChat: [...chat] }));
  },
}));

export { useChatStore };
