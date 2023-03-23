import "./App.css";
// import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Impressum from "./Components/Impressum"
import Logo from './Components/'

import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="header">
            <nav className="navbar">
                {/* LOGO */}
                <div className="logo">
                    <a href="#home">
                        <img className="logoimg" src={Logo} alt="logo" />
                    </a>
                </div>
                {/* NAVLINKS */}
                <div className="navlinks">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#aboutme">About me</a></li>
                    <Link to="/home#skills">Skills</Link>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </div>
            </nav>
        </div>
      <Routes>
        <Route path="/home" element={<Main />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
    </>

    
  );
}
export default App;
