import { Textarea } from "@headlessui/react";
import { FormEvent, useRef, useState } from "react";
import { useChatConnectionStore } from "../store/SocketStore";
import { useChatStore } from "../store/chatTrackStore";
import ChatRoomsSelector from "../components/ChatRoomsSelector";

function Live() {
  const [liveMessage, setLiveMessage] = useState("");
  const { socketConnection } = useChatConnectionStore();
  const roomName = useChatStore((s) => s.room);
  const messageInput = useRef<HTMLTextAreaElement>(null);

  const SentMessageToLive = (e: FormEvent) => {
    e.preventDefault();
    if (!liveMessage) return;

    socketConnection.emit("sent message", liveMessage, roomName);
    if (messageInput.current) {
      messageInput.current.value = "";
      setLiveMessage("");
    }
  };

  return (
    <main className="p-4 flex flex-col justify-center  min-h-screen container mx-auto">
      <section className="font-roboto w-full  text-left flex flex-col gap-5 ">
        <section>
          <div className=" relative flex items-center justify-center bg-gradient-to-b from-[#FFA872] to-[#D98ACA] min-h-[400px]">
            <div className="absolute bg-white size-28 animate-pulse rounded-full "></div>
          </div>
        </section>

        <div className="text-left mt-5">
          <h1 className=" text-3xl  font-bold">Posez vos questions</h1>
          <p className="text-base">
            Vous pouvez poser une question aux orateurs
            <b> via le formulaire ci-dessous.</b>
          </p>
		  <ChatRoomsSelector />
        </div>

        <div className="relative  font-roboto">
          <form onSubmit={SentMessageToLive}>
            <Textarea
              ref={messageInput}
              spellCheck="false"
              value={liveMessage}
              placeholder="Posez votre question .."
              onChange={(e) => setLiveMessage(e.target.value)}
              className="mt-3 w-full flex-1 live-input resize-none focus:border focus:border-gray-400 rounded-lg outline-none bg-white/5 py-1.5  px-3 font-roboto"
              rows={5}
            ></Textarea>
            <button
              type="submit"
              className="bg-black px-4 py-2  mr-4 rounded-lg  font-semibold text-white absolute bottom-0 right-0 mb-4 "
            >
              Envoyer
            </button>
          </form>
        </div>
        <section className="font-roboto">
          <div className="flex flex-col items-center leading-7 gap-4">
            <h2 className="font-bold  text-2xl">
              Vous rencontrez un problème technique ?
            </h2>
            <p className="text-xl">
              Consultez notre Foire Aux Questions pour vous aider à trouver une
              solution
            </p>
            <button className="bg-[#E87731] px-4 py-1 text-white rounded-xl text-sm font-semibold">
              Accéder à la FAQ
            </button>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Live;
