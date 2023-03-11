import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main'
import Impressum from './Components/Impressum';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/imporessum' element={<Impressum />}/>
      </Routes>
      {/* <Main /> */}
    </div>
  );
}

export default App;
