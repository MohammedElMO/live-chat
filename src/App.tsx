import "./App.css";
import Live from "./pages/Live";
import LiveMessages from "./pages/LiveMessages";

function App() {
  return (
    <div className="h-screen w-screen bg-[#F8F8F8]">
      <Live />
	  <LiveMessages />
    </div>
  );
}

export default App;
