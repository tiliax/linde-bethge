import './App.css';
import Header from './Components/Header';
import Main from './Components/Main'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element/>
      </Routes>
      {/* <Main /> */}
    </div>
  );
}

export default App;
