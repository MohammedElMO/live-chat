import { Textarea } from "@headlessui/react";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

function Live() {
  const [liveMessage, setLiveMessage] = useState("");
  useEffect(() => {
    const socket = io("https://localhost:2024");

    socket.on("connection ", () => {
      console.log("connected");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

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
          <Textarea
            value={liveMessage}
            placeholder="Posez votre question .."
            onChange={(e) => setLiveMessage(e.target.value)}
            className="mt-3 w-[200%] resize-none focus:border focus:border-gray-400 rounded-lg outline-none bg-white/5 py-1.5 shadow-lg  px-3 font-roboto"
            rows={5}
          ></Textarea>
          <button className="bg-black px-4 py-2 rounded-lg  font-semibold text-white absolute bottom-0 right-[-86%] mb-4 ">
            Envoyer
          </button>
        </div>
      </section>
    </main>
  );
}

export default Live;
