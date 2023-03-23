import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Impressum from "./Components/Impressum"

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

function App() {
  return (

  //  <BrowserRouter>
    
      <Router>
        <div>
          <Navbar />
          <Route path="/">
            <Main />
          </Route>
          <Route path="/impressum">
            <Impressum />
          </Route>

        </div>
      </Router>
    </>
  //  </BrowserRouter>
    
  );
}
export default App;
