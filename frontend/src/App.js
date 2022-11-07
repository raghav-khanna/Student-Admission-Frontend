import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Raghav/Navbar";
import About from "./Pages/About";
import Faq from "./Pages/Faq";
import Home from "./Pages/Home";
import Placements from "./Pages/Placements";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/placements" element={<Placements />} />
      </Routes>
    </div>
  );
}

export default App;
