import { useEffect } from "react";
import ChatRoomsSelector from "../components/ChatRoomsSelector";
import MessageFilter from "../components/MessageFilter";
import { useChatStore } from "../store/chatTrackStore";
import { useChatConnectionStore } from "../store/SocketStore";
import DisLike from "../svgs/DisLike";
import Done from "../svgs/Done";
import Mask from "../svgs/Mask";
import ChatBoxDisplayer from "../components/ChatBoxDisplayer";

function LiveMessages() {
  const { socketConnection } = useChatConnectionStore();
  const currentFilter = useChatStore((s) => s.currentFilter);
  const userChat = useChatStore((s) => s.userChat);
  const setUserChat = useChatStore((s) => s.setUserChat);

  useEffect(() => {
    socketConnection.on("foward message", (recievedMessage: string) => {
      setUserChat(recievedMessage);
    });
  }, [socketConnection]);

  return (
    <section className=" flex justify-center w-full flex-col gap-4">
      <div className="ml-28">
        <ChatRoomsSelector />
      </div>
      <div className="flex justify-center gap-5 mx-20 ">
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
	  {!userChat.length && <div className="mx-20 font-medium font-roboto">No chat Available Now</div>}
      <section className="flex flex-col  gap-4 mx-20 ">
        {userChat?.map((chat, idx) => (
          <ChatBoxDisplayer
            key={idx}
            chatDate={new Date()}
            chatText={chat.message}
            username={`User-${idx + 1}`}
          />
        ))}
      </section>
    </section>
  );
}

export default LiveMessages;
