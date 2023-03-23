import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Impressum from "./Components/Impressum"

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
        <Navbar />
          <Route path="/" element={<Main />} />
          <Route path="/impressum" element={<Impressum />} />
      </div>
    </Routes>

    
  );
}
export default App;
