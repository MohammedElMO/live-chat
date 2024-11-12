import { createBrowserRouter } from "react-router-dom";
import Live from "../pages/Live";
import App from "../App";
import LiveMessages from "../pages/LiveMessages";
import Header from "../ui/layout/Header";
import Footer from "../ui/layout/Footer";

const router = createBrowserRouter([
  { element: <App />, path: "/" },
  {
    element: (
      <>
        <Header />
        <Live />
      </>
    ),
    path: "/live",
  },
  {
    element: (
      <>
        <Header />
        <LiveMessages />
        {/* <Footer /> */}
      </>
    ),
    path: "/chat",
  },
]);

export { router };
