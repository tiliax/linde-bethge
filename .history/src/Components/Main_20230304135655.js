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
                <div>
                    <li><h1>About me</h1></li>
                    <li><img className='myprofil' src={myProfil} alt="myProfil" /></li>

                </div>
                <p>Wer ich bin was ich mache und so weiter, ich hab so viele</p>
                <p>qualis, dass du ganz neidisch wirst. nicht gedaacht. ja</p>
                <p>so spielt das leben eben du nice person</p>
            </div>
        </div>
    );
}
 
export default Main;