import { Select } from "@headlessui/react";
import { Message, useChatStore } from "../store/chatTrackStore";
import { ChangeEvent, useEffect } from "react";
import { useChatConnectionStore } from "../store/SocketStore";
const rooms = [
  { roomId: 1, label: "Plateau 1" },
  { roomId: 2, label: "Plateau 2" },
  { roomId: 3, label: "Plateau 3" },
];
function ChatRoomsSelector() {
  const setRoom = useChatStore((s) => s.setRoom);
  const room = useChatStore((s) => s.room);
  const setUserChat = useChatStore((s) => s.setUserChat);
  const io = useChatConnectionStore();
  const onChangeRoom = (e: ChangeEvent<HTMLSelectElement>) => {
    setRoom(e.target.value);

    io.socketConnection.emit("join room", room);
    io.socketConnection.on("join", (chat: Message[]) => {
      setUserChat(chat);
    });
  };
  useEffect(() => {
    io.socketConnection.emit("join room", rooms[0].label);

    io.socketConnection.on("join", (chat: Message[]) => {
      setUserChat(chat);
    });
  }, [io.socketConnection, setUserChat]);

  return (
    <Select
      className={"bg-white shadow-lg rounded-lg p-3 outline-none "}
      name="room"
      defaultValue={room}
      onChange={onChangeRoom}
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
    </Select>
  );
}

export default ChatRoomsSelector;
