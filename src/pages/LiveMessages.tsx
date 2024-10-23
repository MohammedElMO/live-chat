import { useEffect, useState } from "react";
import ChatBoxDisplayer from "../components/ChatBoxDisplayer";
import MessageFilter from "../components/MessageFilter";
import { useChatConnectionStore } from "../store/SocketStore";
import DisLike from "../svgs/DisLike";
import Done from "../svgs/Done";
import Mask from "../svgs/Mask";
import { useChatStore } from "../store/chatTrackStore";

function LiveMessages() {
  const { socketConnection } = useChatConnectionStore();
  const currentFilter = useChatStore((s) => s.currentFilter);

  const [userChats, setUserChats] = useState<string[]>([]);
  useEffect(() => {
    socketConnection.on("foward message", (recievedMessage: string) => {
      setUserChats((chat) => [...chat, recievedMessage]);
    });
  }, [socketConnection]);

  return (
    <section className=" flex justify-center w-full flex-col gap-4">
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
      <section className="flex flex-col  gap-4 mx-20 ">
        {userChats.map((chat, idx) => (
          <ChatBoxDisplayer
            key={idx}
            chatDate={new Date()}
            chatText={chat}
            username={`User-${idx + 1}`}
          />
        ))}
      </section>
    </section>
  );
}

export default LiveMessages;
