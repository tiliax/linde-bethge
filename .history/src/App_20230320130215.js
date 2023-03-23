import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Impressum from "./Components/Impressum"

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

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
