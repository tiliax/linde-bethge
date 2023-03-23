import {Link } from "react-router-dom"

import HOMEIMAGE from './images/computerarbeit.jpg'
import myProfil from './images/myProfilSW.jpg'
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
import LINKEDIN from './images/linkedin_grau.png'
import GITHUB from './images/github_grau.png'
import MAIL from './images/mail_grau.png'



function Main () {
    return (

        //MAIN//
        <div className="main">

            {/* //HOME// */}
            <div id='home' className="home">
                <li className='profiltext'>
                    <p> Hello there,</p>
                    <p>I am Linde</p>
                    <p>Full-Stack Developer</p>
                </li>
                <li><img className="homeimg" src={HOMEIMAGE} alt="profil" /></li>
            </div>
            <hr />

            {/* //ABOUT ME// */}
            <div id='aboutme' className="aboutme">
                <h1 >About me</h1>
                <img src={myProfil} alt="myProfil" />
                <p>During my 15-week course at WBS Coding School for web and app development, I gained comprehensive knowledge and practical skills in various programming languages and databases. I have a solid understanding of React, NodeJS, JavaScript, HTML, CSS, SQL databases, and NoSQL databases, and I am eager to continue deepening my expertise in these areas.<br/> <br/>
                As a highly motivated individual, I am committed to exploring the latest trends and advancements in web and app development, and to applying my skills to develop innovative solutions that meet the needs of clients and users. I am also a team player and thrive in collaborative environments, working effectively with colleagues to meet project goals and deliver top-quality results.<br/> <br/>
                Overall, I am confident in my abilities as a developer and look forward to the opportunity to contribute my skills to exciting projects and initiatives in the field of web and app development.</p>
            </div>
            <hr />

            {/* //SKILLS// */}
            <div id='skills' className="skills">
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
            <div id='projects' className="myprojects">
                <h1>My Projects</h1>

                {/* Freebox */}
                <div className='freebox'>
                    <div>
                        <a href="#"><img className="freeboximage" src={FREEBOX} alt="freebox" /></a>
                    </div>
                    <div className="freeboxinfo">
                        <p>A <b>Freebox</b> is a giftbox with giveaways. With the Freebox App you can upload pictures, article information and set a location. Other users can check the map, see where the next freebox is located, see what goods are in there and go grab them. Like this goods can be found and reused.  
                        </p>
                        <p><b>Technologies used: </b>HTML, CSS, React.js, NodeJS</p>
                        <p><b>Links to my Repositories:</b></p> 
                        <a href="https://github.com/tiliax/MyFreebox_FE" target="_blank"><button>Frontend</button></a>
                        <a href="https://github.com/tiliax/MyFreebox_BE" target="_blank"><button>Backend</button></a>                        
                    </div>
                </div>
                {/* Pokefight */}
                <div className='pokefight'>
                    <div>
                        <a href="#"><img className="pokefightimage" src={POKEFIGHT} alt="pokefight" /></a>
                    </div>
                    <div className="pokefightinfo">
                        <p><b>Pokemon</b> is a little game App. You can choose a pokemon on its characteristics and let it fight another. The listed Pokemon details may help you make a profitable decision. 
                        </p>
                        <p><b>Technologies used: </b>HTML, CSS, Material-UI, ReactJS, NodeJS, ExpressJS, NoSQL</p>
                        <p><b>Links to my Repositories:</b></p>
                        <a href="https://github.com/tiliax/FE--PokeFight" target="_blank"><button>Frontend</button></a>
                        <a href="https://github.com/honigbienlein/PokeFight" target="_blank"><button>Backend</button></a>            
                    </div>
                </div>
            </div>
            <hr />

            {/* //CONTACT// */}
            <div id='contact' className="contact">
                <h1>Contact</h1>
                <div className='contactinfo'>
                    <p>For any enquiries, or just to say hello, get in touch an contact me!</p>
                    <br />
                    <div className='contacticons'>
                        <a href="https://www.linkedin.com/in/linde-bethge/" target="_blank"><img className='icon' src={LINKEDIN} alt="linkedin" /></a>
                        <a href="#"><img className='icon' src={MAIL} alt="mail" /></a>
                        <a href="https://github.com/tiliax" target="_blank"><img className='icon' src={GITHUB} alt="github" /></a>
                    </div>
                </div>
            </div>
            <hr id="footer"/>
            <div className="footer">
                <Link to="/impressum">Impressum</Link>
                <Link to="/datenschutz">Datenschutz</Link>
            </div>

        </div>
    );
}
 
export default Main;