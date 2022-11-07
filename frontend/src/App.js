import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Raghav/Navbar";
import About from "./Pages/About";
import Faq from "./Pages/Faq";
import Home from "./Pages/Home";
import Placements from "./Pages/Placements";
import TryNirnay from "./Pages/TryNirnay";
import TryRaghav from "./Pages/TryRaghav";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/try_nirnay" element={<TryNirnay />} />
        <Route path="/try_raghav" element={<TryRaghav />} />

        <Route
          path="*"
          element={
            <div>
              <h1>ERROR!</h1>
              <h4>Wrong URL!</h4>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
