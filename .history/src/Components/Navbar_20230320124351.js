import Logo from './images/LB_Logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        // NAVBAR
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
                    <Link to="/">Home</Link>
                    <Link to="/"><li><a href="#aboutme">About me</a></li></Link>
                    <Link to="/"><li><a href="#skills">Skills</a></li></Link>
                    <Link to="/"><li><a href="#projects">Projects</a></li></Link>
                    <Link to="/"><li><a href="#contact">Contact</a></li></Link>
                                    
                   
                    
                    
                </div>
            </nav>
        </div>
    );
}
 
export default Header;