import { Textarea } from "@headlessui/react";
import { FormEvent, useRef, useState } from "react";
import { useChatConnectionStore } from "../store/SocketStore";
import { useChatStore } from "../store/chatTrackStore";

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
    <main className="p-4">
      <section className="font-roboto w-full  text-left flex flex-col gap-4 ">
        <div>
          <h1 className=" text-3xl text-left ">Posez vos questions</h1>
          <p>
            Vous pouvez poser une question aux orateurs
            <b> via le formulaire ci-dessous.</b>
          </p>
        </div>

        <div className="relative max-w-md px-4 font-roboto">
          <form onSubmit={SentMessageToLive}>
            <Textarea
              ref={messageInput}
              spellCheck="false"
              value={liveMessage}
              placeholder="Posez votre question .."
              onChange={(e) => setLiveMessage(e.target.value)}
              className="mt-3 w-[200%] resize-none focus:border focus:border-gray-400 rounded-lg outline-none bg-white/5 py-1.5 shadow-lg  px-3 font-roboto"
              rows={5}
            ></Textarea>
            <button
              type="submit"
              className="bg-black px-4 py-2 rounded-lg  font-semibold text-white absolute bottom-0 right-[-86%] mb-4 "
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Live;
