import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Impressum from "./Components/Impressum"

import { Browserrouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (

    <>
      <Navbar />
      <Router>
        <Route path="/" element={<Main />} />
        <Route path="/impressum" element={<Impressum />} />
        {/* <Route path="/datenschutz" element={<Datenschutz />} /> */}
      </Router>
    </>
    
  );
}
export default App;
