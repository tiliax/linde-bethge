import Profil from './profil.jpg'
import myProfil from './myProfil.jpg'

const Main = () => {
    return (
        <div className="main">
            <div className="home">
                <li className='profiltext'>
                    <p> Hello there,</p>
                    <p>I am Linde</p>
                    <p>Full-Stack Developer</p>
                </li>
                <li><img className="profil" src={Profil} alt="profil" /></li>
            </div>
            <hr />
            <div className="aboutme">
                <h2>About me</h2>
                <img src={myProfil} alt="myProfil" />
                <p>Wer ich bin was ich mache und so weiter, ich hab so viele qualis, dass du ganz neidisch wirst. nicht gedaacht. ja so spielt das leben eben du nice person</p>
            </div>
        </div>
    );
}
 
export default Main;