// import { Select } from "@headlessui/react";
import { Message, useChatStore } from "../store/chatTrackStore";
import { ChangeEvent, useEffect } from "react";
import { useChatConnectionStore } from "../store/SocketStore";
const rooms = [
  { roomId: 0, label: "" },
  { roomId: 1, label: "Plateau 1" },
  { roomId: 2, label: "Plateau 2" },
  { roomId: 3, label: "Plateau 3" },
];
function ChatRoomsSelector() {
  const setRoom = useChatStore((s) => s.setRoom);
//   const room = useChatStore((s) => s.room);
  const setUserChat = useChatStore((s) => s.setUserChat);
  const io = useChatConnectionStore();
  const onChangeRoom = (e: ChangeEvent<HTMLSelectElement>) => {
    setRoom(e.currentTarget.value);

    io.socketConnection.emit("join room", e.currentTarget.value);
    io.socketConnection.on("join", (chat: Message[]) => {
      setUserChat(chat);
    });
  };
  useEffect(() => {
    // io.socketConnection.emit("join room", rooms[0].label);

    io.socketConnection.on("join", (chat: Message[]) => {
      setUserChat(chat);
    });
  }, [io.socketConnection, setUserChat]);

  return (
    <select
      className={"bg-white shadow-lg rounded-lg p-3 outline-none "}
      onChange={onChangeRoom}
	  defaultValue={rooms[0	].label}
    >
      {rooms.map((room) => (
        <option
          key={room.roomId}
          className={"cursor-pointer  p-2 bg-white shadow-md rounded-lg"}
          value={room.label}
        >
          {room.label}
        </option>
      ))}
    </select>
  );
}

export default ChatRoomsSelector;
