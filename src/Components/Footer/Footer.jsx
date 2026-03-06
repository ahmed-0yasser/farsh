import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
   
return<>
<footer className='bgfooter'>
  <section >
  
    <div className='text-center p-4'>
      <a className='me-5 text-reset' href=""><i className="fab fa-facebook-f"></i></a>
      <a className='me-5 text-reset' href=""><i className="fab fa-twitter"></i></a>
      <a className='me-5 text-reset' href=""><i className="fab fa-google"></i></a>
      <a className='me-5 text-reset' href=""><i className="fab fa-instagram"></i></a>
      <a className='me-5 text-reset' href=""><i className="fab fa-linkedin"></i></a>
    </div>

  </section>
  <section>
    <div className='container text-center text-md-start mt-5'>
      <div className='row mt-3'>
        <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
          <h6> <i className="fa-solid fa-store"></i>Company name</h6>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, quidem. </p>
        </div>
        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
        <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Home</a>
          </p>
          <p>
            <a href="#!" className="text-reset">prodact</a>
          </p>
          <p>
            <a href="#!" className="text-reset">cart</a>
          </p>
          <p>
            <a href="#!" className="text-reset">brand</a>
          </p>
        
          

        </div>

        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
        <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Home</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Prodact</a>
          </p>
          <p>
            <a href="#!" className="text-reset">cart</a>
          </p>
          <p>
            <a href="#!" className="text-reset">brand</a>
          </p>

        </div>
        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
        <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
        <p>
            <i className="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 01017539343</p>
          <p><i className="fas fa-phone me-3"></i> + 01152236016</p>

        </div>


      </div>
    </div>
  </section>
  <div className='text-center pb-4"  ;'>
    E-commerce2024
  </div>
  </footer></>



}

