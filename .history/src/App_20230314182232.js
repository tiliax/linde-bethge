import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main'
import { Route, Routes } from 'react-router-dom';


function App() {

    return (
      <div className="App">
        <Navbar />
        <Main />
      </div>
    );
}
export default App;
