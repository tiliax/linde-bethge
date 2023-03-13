import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main'
import Impressum from './Components/Impressum';
import Datenschutz from './Components/Datenschutz';
import {createBrowserRouter, createRoutesFromElements, Route, Link} from 'react-router-dom'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Main/>}/>
        <Route path='/impressum' element={<}/>

      </Route>
    )
  )
  return (
    <div className="App">
      <Navbar />
      <Route path='/' element>
        <Route path='/' element={<Main />}/>
        <Route path='/impressum' element={<Impressum />}/>
        <Route path='/datenschutz' element={<Datenschutz />}/>
      </Route>
      {/* <Main /> */}
    </div>
  );
}

export default App;
