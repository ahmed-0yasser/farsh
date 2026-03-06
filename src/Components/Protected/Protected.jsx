import React from 'react'
import style from './Protected.module.css'
import { Navigate } from 'react-router-dom'


export default function Protected(props) {
  if(localStorage.getItem("usertoken") !== null){
    return props.children
  }
  else{
    return <Navigate to={'/login'} />
  }
}
