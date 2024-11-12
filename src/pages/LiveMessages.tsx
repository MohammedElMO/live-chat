import { useEffect } from "react";
import ChatRoomsSelector from "../components/ChatRoomsSelector";
import MessageFilter from "../components/MessageFilter";
import { Message, useChatStore } from "../store/chatTrackStore";
import { useChatConnectionStore } from "../store/SocketStore";
import DisLike from "../svgs/DisLike";
import Done from "../svgs/Done";
import Mask from "../svgs/Mask";
import ChatBoxDisplayer from "../components/ChatBoxDisplayer";
import Accodian from "../ui/Accodian";
import Refresh from "../svgs/Refresh";
import Close from "../svgs/Close";

function LiveMessages() {
  const { socketConnection } = useChatConnectionStore();
  const currentFilter = useChatStore((s) => s.currentFilter);
  const userChat = useChatStore((s) => s.userChat);
  const setUserChat = useChatStore((s) => s.setUserChat);

  useEffect(() => {
    socketConnection.on("forward message", (recievedMessage: Message[]) => {
      setUserChat(recievedMessage);
    });
  }, [setUserChat, socketConnection]);

  return (
    <section className=" flex justify-center w-full flex-col gap-4 container mx-auto">
      <div className="text-center my-5">
        <h1 className="text-5xl font-medium font-roboto">LE NOM DU PLATEAU</h1>
      </div>
      <div className="ml-28 mx-10 flex items-center justify-between">
        <ChatRoomsSelector />

        <div className="flex  gap-3 items-center">
          <button className="px-4 py-5 bg-[#000000]  rounded-xl text-white font-medium flex items-center gap-3">
            <Refresh />
            Rafraîchir la page
          </button>
          <button className="px-4 py-5 bg-[#FF0000]  rounded-xl text-white font-medium flex items-center gap-3">
            <Close />
            Archiver les questions
          </button>
        </div>
      </div>
      <div className="flex items-center flex-col gap-4">
        <h2 className="text-3xl font-semibold font-roboto">
          Questions des utilisateurs
        </h2>
        <Accodian />
      </div>

      <div className="flex justify-center gap-5">
        <MessageFilter
          activeFilter="no-filter"
          filterName="Toutes les questions"
        />
        <MessageFilter
          activeFilter="masked"
          filterName="Questions masquées"
          icon={<Mask isActive={currentFilter === "masked"} />}
        />

        <MessageFilter
          filterName="Questions répondues"
          activeFilter="answred"
          icon={<Done isActive={currentFilter === "answred"} />}
        />
        <MessageFilter
          activeFilter="yet-to-answer"
          filterName="Ne pas répondre"
          icon={<DisLike isActive={currentFilter === "yet-to-answer"} />}
        />
      </div>
      {!userChat.length && (
        <div className="mx-20 font-medium font-roboto">
          No chat Available Now
        </div>
      )}
      <div className="flex flex-col  gap-4 mx-20 overflow-auto max-h-[500px] ">
        {userChat?.map((chat, idx) => (
          <ChatBoxDisplayer
            key={idx}
            chatDate={new Date()}
            chatText={chat.message}
            username={`User-${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default LiveMessages;
