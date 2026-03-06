import React from 'react'
import style from './Home.module.css'
import Cart from "../Cart/Cart"
import Products from "../Products/Products"
import About from '../About/About'
import Categoryslider from '../Categoryslider/Categoryslider'
import MainSlider from '../MainSlider/MainSlider'



export default function Home() {
  return <>
  
    <MainSlider/>
  <Categoryslider/>
 <About/>

  
  </>

}
