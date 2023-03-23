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
                    <Link to="/"><a href=''>Home</a></Link>
                    <li><a href="#aboutme">About me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </div>
            </nav>
        </div>
    );
}
 
export default Header;