import Profil from './profil.jpg'

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
                <h1>About me</h1>
                <img src={myProfil} alt="myProfil" />
                <p>Wer ich bin was ich mache und so weiter, ich hab so viele qualis, dass du ganz neidisch wirst. nicht gedaacht. ja so spielt das leben eben du </p>
            </div>
        </div>
    );
}
 
export default Main;