import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Impressum from "./Components/Impressum"

import { Browserrouter as Router, Switch, Routes, Link } from "react-router-dom";

function App() {
  return (

   <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/">
          <Main />
        </Route>
        <Route path="/impressum">
          <Impressum />
        </Route>
      </Routes>
    </div>
   </Router>
    
  );
}
export default App;
