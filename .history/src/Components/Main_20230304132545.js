import Profil from './profil.jpg'

const Main = () => {
    return (
        <div className="main">
            <div className="home">
                <li className='profiltext'>
                    <p> Hello there </p>
                    <p>lksjdfkj sldkj sfdlkj sdflkj sfd</p>
                </li>
                <li><img className="profil" src={Profil} alt="profil" /></li>
            </div>
        </div>
    );
}
 
export default Main;