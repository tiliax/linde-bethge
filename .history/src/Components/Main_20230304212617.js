import Profil from './profil.jpg'
import myProfil from './myProfil.jpg'

const Main = () => {
    return (

        //MAIN//
        <div className="main">

            {/* //HOME// */}
            <div className="home">
                <li className='profiltext'>
                    <p> Hello there,</p>
                    <p>I am Linde</p>
                    <p>Full-Stack Developer</p>
                </li>
                <li><img className="profil" src={Profil} alt="profil" /></li>
            </div>
            <hr />

            {/* //ABOUT ME// */}
            <div className="aboutme">
                <h1>About me</h1>
                <img className='myprofil' src={myProfil} alt="myProfil" />
                <qualis,>Wer ich bin was ich mache und so weiter, ich hab so vielequalis, dass du ganz neidisch wirst. nicht gedaacht. ja
                <p>so spielt das leben eben du nice person</p>
            </div>
            <hr />

            {/* //SKILLS// */}
            <div className="skills">
                
            </div>
        </div>
    );
}
 
export default Main;