import Profil from './images/profil.jpg'
import myProfil from './images/myProfil.jpg'
import HTML from './images/html.png'
import CSS from './images/css.png'
import REACT from './images/react.png'
import JS from './images/js.png'
import GIT from './images/git.png'
import SQLNoSQL from './images/database.png'
import NODEJS from './images/nodejs.png'
import DOCKER from './images/docker.png'

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
                <p> qualis, Wer ich bin was ich mache und so weiter, ich hab so vielequalis, dass du ganz neidisch wirst. nicht gedaacht. ja so spielt das leben eben du nice person Und noch viel länger lalalalal <br /> qualis, Wer ich bin was ich mache und so weiter, ich hab so vielequalis, dass du ganz neidisch wirst. nicht gedaacht. ja so spielt das leben eben du nice person Und noch viel länger lalalalal <br /> <br /> qualis, Wer ich bin was ich mache und so weiter, ich hab so vielequalis, dass du ganz neidisch wirst. nicht gedaacht. ja so spielt das leben eben du nice person Und noch viel länger lalalalal <br /> qualis, Wer ich bin was ich mache und so weiter, ich hab so vielequalis, dass du ganz neidisch wirst. nicht gedaacht. ja so spielt das leben eben du nice person Und noch viel länger lalalalal</p>
            </div>
            <hr />

            {/* //SKILLS// */}
            <div className="skills">
                <h1>My Skills</h1>
                <div className="skillimages1">
                    <img className="item" src={HTML} alt="html" />
                    <img className="item" src={CSS} alt="css" />
                    <img className="item" src={REACT} alt="react" />
                    <img className="item" src={JS} alt="js" />
                </div>
                < div className="skillimage2">
                    <img className="item" src={GIT} alt="git" />
                    <img className="item" src={NO} alt="sql noSql" />
                    <img className="item" src={JS} alt="nodejs" />
                    <img className="item" src={JS} alt="docker" />
                </div>
            </div>
        </div>
    );
}
 
export default Main;