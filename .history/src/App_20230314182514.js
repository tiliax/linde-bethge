import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main'
import { Route, Routes } from 'react-router-dom';


function App() {

    return (
      <Routes>
        <Route path='/' element={<Navbar/>} />
        <Route path='/' element={<Main/>} />
        <Main />
      </Routes>
    );
}
export default App;
