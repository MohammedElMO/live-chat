import { io, } from "socket.io-client";
import type {} from "socket.io-client";
import { create } from "zustand";

type SocketEvents = ReturnType<typeof io>;
type ChatConnectionStore = {
  socketConnection: SocketEvents;
};

const useChatConnectionStore = create<ChatConnectionStore>(() => ({
  socketConnection: io("http://localhost:4000"),
}));

export { useChatConnectionStore };
