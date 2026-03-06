import React, { useContext } from 'react'
import style from './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../Assats/freshcart-logo.svg'
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext'

export default function Navbar() {
  let { cartItemsCount } = useContext(CartContext)
  let { userToken, setuserToken } = useContext(UserContext)
  let navigate = useNavigate();

  function Logout() {
    localStorage.removeItem('usertoken');
    setuserToken(null);
    navigate('/login');
  }

  return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src={logo} alt="FreshCart" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {userToken !== null ? <>
              <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/catgories">Categories</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/brands">Brands</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link position-relative" to="/cart">
                  <i className="fa-solid fa-cart-shopping"></i> Cart
                  {cartItemsCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartItemsCount}
                    </span>
                  )}
                </Link>
              </li>
            </> : ''}
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {userToken !== null ? <>
              <li className="nav-item">
                <span onClick={() => Logout()} className="nav-link cursor-pointer">Logout</span>
              </li>
            </> : <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </>}
            <li className="nav-item d-flex align-items-center">
              <i className='fab fa-facebook mx-2'></i>
              <i className='fab fa-twitter mx-2'></i>
              <i className='fab fa-instagram mx-2'></i>
              <i className='fab fa-tiktok mx-2'></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
}
