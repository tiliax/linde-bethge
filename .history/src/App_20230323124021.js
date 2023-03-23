import "./App.css";
import Main from "./Components/Main";
import Impressum from "./Components/Impressum"
import Datenschutz from "./Components/Datenschutz";
import Logo from './Components/images/LB_Logo.png'

import { Routes, Route, Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";

function App() {
  return (
    <>
      <div className="header">
            <nav className="navbar">
                {/* LOGO */}
                  <HashLink smooth to="/#home">
                    <div className="logo">
                      <a href="#home"><img className="logoimg" src={Logo} alt="logo" /></a>
                    </div>
                  </HashLink>
                {/* NAVLINKS */}
                <div className="navlinks">
                  {/* <Link to="/">Home</Link> */}
                  <HashLink smooth to="/#home">Home</HashLink>
                  <HashLink smooth to="/#aboutme">About me</HashLink>
                  <HashLink smooth to="/#skills">Skills</HashLink>
                  <HashLink smooth to="/#projects">Projects</HashLink>
                  <HashLink smooth to="/#contact">Contact</HashLink>
                </div>
            </nav>
        </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </>

    
  );
}
export default App;
