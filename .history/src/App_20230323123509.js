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
                  <Link to="/">
                    <div className="logo">
                      <a href="#home"><img className="logoimg" src={Logo} alt="logo" /></a>
                    </div>
                  </Link>
                {/* NAVLINKS */}
                <div className="navlinks">
                  <Link to="/">Home</Link>
                  <Link to="/impressum">Impressum</Link>
                  <Link to="/datenschutz">Datenschutz</Link>
                  <HashLink to="/#aboutme">About me</HashLink>
                  <HashLink to="/#skills">Skills</HashLink>
                  <HashLink to="/#projects">Projects</HashLink>
                  <HashLink to="/#contact">Contact</HashLink>
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
