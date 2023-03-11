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
import POKEFIGHT from './images/pokefight.png'

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
                <img src={myProfil} alt="myProfil" />
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

            {/* //PROJECTS// */}
            <div className="myprojects">
                <h1>My Projects</h1>

                {/* Freebox */}
                <div className='freebox'>
                    <div>
                        <a href="#"><img className="freeboximage" src={FREEBOX} alt="freebox" /></a>
                    </div>
                    <div className="freeboxinfo">
                        <p><b>Freebox</b> is an app for bla Freebox is an app for bla Freebox is an app for bla Freebox is an app for bla Freebox is an app for bla Freebox is an app for bla Freebox is an app for bla Freebox is an app for bla Freebox is an app for bla Freebox is an app for bla.
                        </p>
                        <p><b>Technologies used: </b>HTML, CSS, React.js, NodeJS</p>
                        <p><b>Links to my Repositories:</b></p> <button>Frontend</button>
                        <button>Backend</button>                        
                    </div>
                </div>

                {/* Pokefight */}
                <div className='pokefight'>
                    <div>
                        <a href="#"><img className="pokefightimage" src={POKEFIGHT} alt="pokefight" /></a>
                    </div>
                    <div className="pokefightinfo">
                        <p>The <b>Pokemon</b> App shows all Pokemons and their details. You can pick one and let it fight. Afterwards you can see the game results.
                        </p>
                        <p><b>Technologies used: </b>HTML, CSS, Material-UI, ReactJS, NodeJS, ExpressJS, NoSQL</p>
                        <p><b>Links to my Repositories:</b></p> <button>Frontend</button>
                        <button>Backend</button>                        
                    </div>
                </div>
            </div>
            <hr />
            <div className="contact">
                <h1>Contact me</h1>
                <div className='contactinfo'>
                    <p>Drop a message to say "hello", connect on social media, or see if we can collaborate on something amazing? I am happy to get in touch!</p>
                    <div>
                        <a href="#"><img src="" alt="" /></a>
                        <a href="#"><img src="" alt="" /></a>
                    <a href="#"><img src="" alt="" /></a>
                </div>
                </div>
                

            </div>

        </div>
    );
}
 
export default Main;