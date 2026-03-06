import React, { useContext, useState } from 'react'
import style from './Login.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';

export default function Login() {

  let {setuserToken} = useContext(UserContext);
  let navigate = useNavigate()
  let [error, seterror] = useState(null)
  let [loding, setloding] = useState(false)

  async function loginsubmit(values) {
    setloding(true)
    try {
      let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values)
      if(data.message === 'success') {
        setloding(false)
        localStorage.setItem('usertoken', data.token)
        setuserToken(data.token)
        navigate('/')
      }
    } catch(err) {
      setloding(false)
      seterror(err.response?.data?.message || 'Login failed')
    }
  }

  let validatescheme = Yup.object({
    email: Yup.string().email('email is invalid').required('email is required'),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{5,10}$/, 'Password must start with an uppercase letter and be between 6 to 11 characters long')
      .required('Please provide a valid password'),
  })

  let formek = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validatescheme,
    onSubmit: loginsubmit
  })

  return <>
    <div className='w-75 mx-auto py-5'>
      <h3>Login Now</h3>
      <form onSubmit={formek.handleSubmit}>
        {error !== null ? <div className="alert alert-danger">{error}</div> : ''}

        <label htmlFor="email">email: </label>
        <input autoComplete="email" className='form-control w-100' value={formek.values.email} id='email' type='email' name='email' onChange={formek.handleChange} onBlur={formek.handleBlur} />
        {formek.errors.email && formek.touched.email ? <div className="alert alert-danger p-2 mt-2">{formek.errors.email}</div> : ''}

        <label htmlFor="password">password:</label>
        <input autoComplete="off" className='form-control w-100' value={formek.values.password} id='password' type='password' name='password' onChange={formek.handleChange} onBlur={formek.handleBlur} />
        {formek.errors.password && formek.touched.password ? <div className="alert alert-danger p-2 mt-2">{formek.errors.password}</div> : ''}

        {loding ? <button type='button' className='btn bg-main text-white mt-2 '> <i className="fa-solid fa-spinner fa-spin"></i></button>
          : <>  <div className='d-flex align-items-center justify-content-between'><button disabled={!(formek.isValid && formek.dirty)} type='submit' className='btn bg-main text-white mt-2 '> Login</button> <Link className='btn' to={'/register'}>Create Register Now</Link> </div> </>
        }
      </form>
    </div>
  </>
}
