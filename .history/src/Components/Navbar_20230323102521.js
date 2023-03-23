import Logo from './images/LB_Logo.png'
import { Link } from 'react-router-dom';

function Header() {
    return (

        // NAVBAR
        <div className="header">
            <nav className="navbar">
                {/* LOGO */}
                <div className="logo">
                    <Link to="/">
                        <img className="logoimg" src={Logo} alt="logo" />
                    </Link>
                </div>
                {/* NAVLINKS */}
                <div className="navlinks">
                    <Link to="/">Home</Link>
                    <li><a href="#aboutme">About me</a></li>
                    <Link to="/"><li><a href="#skills">Skills</a></li></Link>
                    <Link to="/"><li><a href="#projects">Projects</a></li></Link>
                    <Link to="/"><li><a href="#contact">Contact</a></li></Link>
                </div>
            </nav>
        </div>
    );
}
 
export default Header;