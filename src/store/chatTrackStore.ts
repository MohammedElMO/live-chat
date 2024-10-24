import { create } from "zustand";

export type Choice = "answred" | "masked" | "yet-to-answer" | "no-filter";

export type Message = {
  message: string;
};

// type PlateauMessages = {
//   [plateau: string]: Message[];
// };

type ChatStore = {
  currentFilter: Choice;
  setCurrentFilter: (choice: Choice) => void;
  room: string;
  setRoom: (roomeName: string) => void;

  userChat: Message[];
  setUserChat: (chat: string | Message[]) => void;
};

const useChatStore = create<ChatStore>((set) => ({
  currentFilter: "no-filter",
  setCurrentFilter: (selectedFilter) =>
    set(() => ({ currentFilter: selectedFilter })),
  room: "Plateau 1",
  setRoom: (room) => set(() => ({ room })),
  userChat: [],
  setUserChat: (chat) => {
    if (typeof chat === "string")
      set((s) => ({
        userChat: [...s.userChat, { message: chat }],
      }));
    else {
      set(() => ({ userChat: [...chat] }));
    }
  },
}));

export { useChatStore };
