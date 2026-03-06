import logo from './logo.svg';
import { Toaster } from 'react-hot-toast';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Cart from './Components/Cart/Cart'
import Brands from './Components/Brands/Brands'
import NotFound from './Components/NotFound/NotFound'
import Catgories from './Components/Catgories/Catgories'
import CounterContextProvider from './Context/CounterContext'
import UserContextProvider, { UserContext } from './Context/UserContext';
import Products from './Components/Products/Products';
import Layout from './Components/Layout/Layout'
import Protected from './Components/Protected/Protected'
 import About from './Components/About/About'
import ProdactDitals from './Components/ProdactDitals/ProdactDitals';
import { CartContextProvider } from './Context/CartContext';



let routers=createBrowserRouter ([
  {path:'/',element:<Layout/>
    ,children:[
      {index:true,element:<Protected><Home/></Protected>},
      {path:'products',element:<Protected><Products/></Protected>},
      {path:'login',element:<Login/>},
      {path:'home',element:<Home
      />},
      {path:'register',element:<Register/>},
      {path:'cart',element:<Protected><Cart/></Protected>},
      {path:'catgories',element:<Protected><Catgories/></Protected>}, 
      {path:'brands',element: <Protected><Brands/></Protected> },
      {path:'prodactditals/:id',element: <Protected><ProdactDitals/></Protected> },
      {path:'*',element:<NotFound/>}
      
    ]
  }
]) 
function App() {


  return<CartContextProvider>
  <UserContextProvider>

  <CounterContextProvider>

    <RouterProvider router={routers}></RouterProvider>
    <Toaster />

    </CounterContextProvider>

    </UserContextProvider>

  </CartContextProvider>
  
}

export default App;
