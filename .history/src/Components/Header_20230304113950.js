import Logo from '../Components/LB_Logo.png'

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
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    
                    <a href="#">About me</a>
                    <a href="#">Skills</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>
                </div>
            </nav>
        </div>
    );
}
 
export default Header;