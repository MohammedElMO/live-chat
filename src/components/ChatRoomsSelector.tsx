// import { Select } from "@headlessui/react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useEffect } from "react";
import { Message, useChatStore } from "../store/chatTrackStore";
import { useChatConnectionStore } from "../store/SocketStore";
import ExpandSheveron from "../svgs/ExpandSheveron";
const rooms = [
  //   { roomId: 0, name: "" },
  { roomId: 1, name: "Plateau 1" },
  { roomId: 2, name: "Plateau 2" },
  { roomId: 3, name: "Plateau 3" },
];
function ChatRoomsSelector() {
  const setRoom = useChatStore((s) => s.setRoom);
  const room = useChatStore((s) => s.room);
  const setUserChat = useChatStore((s) => s.setUserChat);
  const io = useChatConnectionStore();
  const onChangeRoom = (room:string) => {
    setRoom(room);
    console.log("current room : ", room);
    io.socketConnection.emit("join room", room);
    io.socketConnection.on("joined", (chat: Message[]) => {
      setUserChat(chat);
    });
  };
  useEffect(() => {

    io.socketConnection.on("join", (chat: Message[]) => {
      setUserChat(chat);
    });
  }, [io.socketConnection, setUserChat]);

  return (
    <Listbox
      defaultValue={rooms[0]["name"]}
      onChange={onChangeRoom}
    >
      <ListboxButton
        className={
          "bg-white flex justify-between font-bold font-roboto items-center  p-4 rounded-lg shadow-lg w-44 text-left"
        }
      >
        {room}
        <ExpandSheveron />
      </ListboxButton>
      <ListboxOptions defaultValue={rooms[0]["name"]} className={"mt-2 rounded-lg w-44 shadow-lg"	} anchor="bottom">
        {rooms.map((room) => (
          <ListboxOption
            className="bg-white  px-3 py-2 cursor-pointer shadow-lg  w-full  data-[focus]:bg-[#1D00FF]  data-[focus]:text-white font-medium text-base"
            key={room.roomId}
            value={room.name}
          >
            {room.name}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}

export default ChatRoomsSelector;
