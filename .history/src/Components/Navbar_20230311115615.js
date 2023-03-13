import Logo from './images/LB_Logo.png'
import { Link } from 'react-router-dom';
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
                    <li><a href="#home">Home</a></li>

                    <li><a href="#aboutme">About me</a></li>
                    {/* <li><a href="/aboutme">About me</a></li> */}


                    {/* <li><a href="#skills">Skills</a></li> */}
                    <li>
                        <Link to={skills} smooth={true} onDurationChange={500} >Skills</Link>    
                    </li>


                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </div>
            </nav>
        </div>
    );
}
 
export default Header;