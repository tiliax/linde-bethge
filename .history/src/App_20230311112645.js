import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main'
import Impressum from './Components/Impressum';
import Datenschutz from './Components/Datenschutz';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/imporessum' element={<Impressum />}/>
        <Route path='/imporessum' element={<Datenschutz />}/>
      </Routes>
      {/* <Main /> */}
    </div>
  );
}

export default App;
