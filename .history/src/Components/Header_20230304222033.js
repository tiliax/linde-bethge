import Logo from './images/'

const Header = () => {
    return (

        // NAVBAR
        <div className="header">
            <nav className="navbar">
                {/* LOGO */}
                <div className="logo">
                    <a href="#">
                        <img className="logoimg" src={Logo} alt="logo" />
                    </a>
                </div>
                {/* NAVLINKS */}
                <div className="navlinks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About me</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </div>
            </nav>
        </div>
    );
}
 
export default Header;