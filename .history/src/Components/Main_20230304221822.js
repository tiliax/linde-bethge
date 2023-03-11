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
                <p> qualis, Wer ich bin was ich mache und so weiter, ich hab so vielequalis, dass du ganz neidisch wirst. nicht gedaacht. ja so spielt das leben eben du nice person Und noch viel länger lalalalal <br /> qualis, Wer ich bin was ich mache und so weiter, ich hab so vielequalis, dass du ganz neidisch wirst. nicht gedaacht. ja so spielt das leben eben du nice person Und noch viel länger lalalalal <br /> <br /> qualis, Wer ich bin was ich mache und so weiter, ich hab so vielequalis, dass du ganz neidisch wirst. nicht gedaacht. ja so spielt das leben eben du nice person Und noch viel länger lalalalal <br /> qualis, Wer ich bin was ich mache und so weiter, ich hab so vielequalis, dass du ganz neidisch wirst. nicht gedaacht. ja so spielt das leben eben du nice person Und noch viel länger lalalalal</p>
            </div>
            <hr />

            {/* //SKILLS// */}
            <div className="skills">
                <h1>My Skills</h1>
                <div className="container">
                    <div className="one"></div>
                    <div className="tow"></div>
                    <div className="thee"></div>
                    <div className="four"></div>
                    <div className="five"></div>
                    <div className="six"></div>
                    <div className="seven"></div>
                    <div className="eight"></div>

                </div>
                
            </div>
        </div>
    );
}
 
export default Main;