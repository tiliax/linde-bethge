import "./App.css";
// import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Impressum from "./Components/Impressum"
import Datenschutz from "./Components/Datenschutz";
import Logo from './Components/images/LB_Logo.png'

import { Routes, Route, Link } from 'react-router-dom';

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
                  <Link to="/#aboutme"><li><a href="#aboutme">About me</a></li></Link>
                  {/* <Link to="/#aboutme">About me</Link> */}

                    {/* <li><a href="#home">Home</a></li> */}
                    
                    {/* <li><a href="#skills">Skills</a></li> */}
                    {/* <li><a href="#projects">Projects</a></li> */}
                    {/* <li><a href="#contact">Contact</a></li> */}
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
