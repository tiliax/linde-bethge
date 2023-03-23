import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/main" element={<Main />} />
      <Route path="/main" element={<Main />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}
export default App;
