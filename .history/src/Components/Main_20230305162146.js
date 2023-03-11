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
import FREEBOX from './images/freebox.png'

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
                    <div className="skilldiv">
                        <img className="item" src={HTML} alt="html" />
                        <p>HTML5</p>
                    </div>
                    <div className="skilldiv">
                        <img className="item" src={CSS} alt="css" />
                        <p>CSS</p>
                    </div>
                    <div className="skilldiv">
                        <img className="item" src={REACT} alt="react" />
                        <p>React.js</p>
                    </div>
                    <div className="skilldiv">
                        <img className="item" src={JS} alt="js" />
                        <p>JavaScript</p>
                    </div>
                </div>
                < div className="skillimages2">
                    <div className="skilldiv">
                        <img className="item" src={GIT} alt="git" />
                        <p>Git</p>
                    </div>
                    <div className="skilldiv">
                        <img className="item" src={SQLNoSQL} alt="sql noSql" />
                        <p>SQL/ NoSQL</p>
                    </div>
                    <div className="skilldiv">
                        <img className="item" src={NODEJS} alt="nodejs" />
                        <p>Node.js</p>
                    </div>
                    <div className="skilldiv">
                        <img className="item" src={DOCKER} alt="docker" />
                        <p>docker</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="myprojects">
                <h1>My Projects</h1>
                <div className='freebox'>
                    <div className="freeboximage">
                        <a href="#"><img src={FREEBOX} alt="freebox" /></a>
                    </div>
                    <div className="freeboxinfo">
                        <p>Freebox is an app for bla Freebox is an app for bla Freebox is an app for bla Freebox is an app for bla Freebox is an app for bla Freebox is an app for bla Freebox is an app for bla Freebox is an app for bla Freebox is an app for bla Freebox is an app for bla.
                        </p>
                        <br />
                        <p>Technologies used:</p>
                        <p>HTML, CSS, React.js, NodeJS</p>
                        <br />
                        <p>Links to my Repositories</p>
                        <button>Frontend</button>
                        <button>Backend</button>
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default Main;