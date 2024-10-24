import "./App.css";
import Live from "./pages/Live";
import LiveMessages from "./pages/LiveMessages";
import { useChatStore } from "./store/chatTrackStore";

function App() {
  const room = useChatStore((s) => s.room);

  console.log("roome is ", room);
  return (
    <div className="h-screen w-screen bg-[#F8F8F8]">
      <Live />
      <LiveMessages />
    </div>
  );
}

export default App;
