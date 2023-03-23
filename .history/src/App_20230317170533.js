import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<div>  <Main /> </div>} />
      <Route path="/impressum" element={<Impressum />} />
      {/* <Route path="/datenschutz" element={<Datenschutz />} /> */}
    </Routes>
  );
}
export default App;
