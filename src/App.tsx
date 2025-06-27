import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SubmitWhisper from "./pages/SubmitWhisper";
import "./App.css";

// import Success from "./pages/Success";
// import Wall from "./pages/Wall";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<SubmitWhisper />} />
        {/* <Route path="/success" element={<Success />} />
        <Route path="/wall" element={<Wall />} /> */}
      </Routes>
    </>
  );
}

export default App;
