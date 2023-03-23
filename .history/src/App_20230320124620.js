import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Impressum from "./Components/Impressum"

import { Browserrouter, Switch, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom/client';

function App() {
  return (

   <Browserrouter>
    <div>
      <Navbar />
      <Switch>
        <Route path="/">
          <Main />
        </Route>
        <Route path="/impressum">
          <Impressum />
        </Route>
      </Switch>
    </div>
   </Browserrouter>
    
  );
}
export default App;
