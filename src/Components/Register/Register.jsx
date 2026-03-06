import React, { useState } from 'react';
import style from './Register.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {

  let navigate = useNavigate();
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(false);

  async function registerSubmit(values) {
    setLoading(true);
    let { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.message);
      });

    if (data && data.message === 'success') {
      setLoading(false);
      navigate('/login');
    }
  }

  let phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  let validateSchema = Yup.object({
    name: Yup.string().min(3, 'name min length 3').max(10, 'name max 10').required('name is required'),
    email: Yup.string().email('email is invalid').required('email is required'),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('phone is required'),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{5,10}$/, 'Password must start with an uppercase letter and be between 6 to 11 characters long')
      .required('Please provide a valid password'),
    rePassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  let formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
      rePassword: ''
    },
    validationSchema: validateSchema,
    onSubmit: registerSubmit
  });

  return (
    <div className="w-75 mx-auto py-5">
      <h3>Register Now</h3>
      <form onSubmit={formik.handleSubmit}>
        {error !== null ? <div className="alert alert-danger">{error}</div> : ''}

        <label htmlFor="name">Name:</label>
        <input disabled={loading} className='form-control' value={formik.values.name} id='name' type='text' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.name && formik.touched.name ? <div className="alert alert-danger p-2 mt-2">{formik.errors.name}</div> : null}

        <label htmlFor="phone">Phone:</label>
        <input disabled={loading} className='form-control' value={formik.values.phone} id='phone' type='tel' name='phone' onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.phone && formik.touched.phone ? <div className="alert alert-danger p-2 mt-2">{formik.errors.phone}</div> : null}

        <label htmlFor="email">Email:</label>
        <input disabled={loading} className='form-control' value={formik.values.email} id='email' type='email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.email && formik.touched.email ? <div className="alert alert-danger p-2 mt-2">{formik.errors.email}</div> : null}

        <label htmlFor="password">Password:</label>
        <input disabled={loading} className='form-control' value={formik.values.password} id='password' type='password' name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.password && formik.touched.password ? <div className="alert alert-danger p-2 mt-2">{formik.errors.password}</div> : null}

        <label htmlFor="rePassword">Confirm Password:</label>
        <input disabled={loading} className='form-control' value={formik.values.rePassword} id='rePassword' type='password' name='rePassword' onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.rePassword && formik.touched.rePassword ? <div className="alert alert-danger p-2 mt-2">{formik.errors.rePassword}</div> : null}

        {loading ? 
          <button type='button' className='btn bg-main text-white mt-2'><i className="fa-solid fa-spinner fa-spin"></i></button> 
          : 
          <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-main text-white mt-2'>Register</button>
        }
      </form>
    </div>
  );
}
