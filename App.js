import './App.css';
import Dashboard from './components/Dashboard';
import Product from './components/Product';
import Cart from './components/Cart';
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Admin from './components/Admin';
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/admin" element={<Admin/>}></Route>
    </Route>
  ))
  return (
   <div className='App'>
   <RouterProvider router={router}/>
   </div>
  );
}

export default App;
