import React, { useContext, useEffect } from 'react'
import style from './Layout.module.css'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { Offline, Online } from "react-detect-offline";

export default function Layout() {
  let {setuserToken}=useContext(UserContext)
useEffect(()=>{
  if(  localStorage.getItem('usertoken')!==null){
    setuserToken(localStorage.getItem('usertoken'))
  }
  
},[])
  return <>
  <Navbar/>
  <div className="container">
  <Outlet/>
  </div>

  <div>
  
    <Offline>
      <div className='network'>
         <i className="fas fa-wifi"></i> Only shown (network!! ) </div>
    </Offline>
  </div>
   
   <Footer/>
  </>

}
