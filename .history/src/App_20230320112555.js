import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Impressum from "/Impressum"
import { Route, Routes } from "react-router-dom";

function App() {
  return (

    <>
      <Navbar />
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/impressum" element={<Impressum />} />
        {/* <Route path="/datenschutz" element={<Datenschutz />} /> */}
      </Routes>
    </>
    
  );
}
export default App;
