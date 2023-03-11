import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main'
// import Impressum from './Components/Impressum';
// import Datenschutz from './Components/Datenschutz';
// import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <Navbar />
       <Routes>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/impressum' element={<Impressum />}/>
        <Route path='/datenschutz' element={<Datenschutz />}/>
      </Routes>
      <Main /> */}
      
    </div>
  );
}

export default App;
