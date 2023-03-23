import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main'
import ReactDOM from "react-dom/client"
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
function App() {

    return (
      <div className="App">
        <Navbar />
        <Main />
      </div>
    );
}
export default App;
