import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main'
import Impressum from './Components/Impressum';
import Datenschutz from './Components/Datenschutz';
import { ReactDOM } from 'react-dom/cl';
import {createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider} from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello World</div>
    }
  ]);

  ReactDom.createRoote(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )




//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path='/' element={<Root />}>
//         <Route index element={<Main/>}/>
//         <Route path='/impressum' element={<Impressum/>}/>
//       </Route>
//     )
//   )
//   return (
//     <div className="App">
//       <RouterProvider router={router}/>
//     </div>
//   );
// }

// const Root = () => {
//   return <>
//     <div>
//       <Link to='/'>Navbar</Link>
      
//     </div>
//     <div>
//       <Outlet />
//     </div>
//   </>
}
export default App;
