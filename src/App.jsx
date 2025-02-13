import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import ModeSelection from "./pages/ModeSelection";
import General1 from "./pages/General1";
import General2 from "./pages/General2";
import Travel from "./pages/Travel";
import Education from "./pages/Education";
import Medical from "./pages/Medical";

function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ModeSelection/>}/>
        <Route path="/mode1" element={<General1/>}/>
        <Route path="/mode2" element={<General2/>}/>
        <Route path="/mode3" element={<Travel/>}/>
        <Route path="/mode4" element={<Education/>}/>
        <Route path="/mode5" element={<Medical/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
