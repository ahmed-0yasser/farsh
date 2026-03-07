import React from 'react'

import axios from 'axios'
import { useQuery } from 'react-query'

export default function Brands() {
  let getBrands=()=>{
    return axios.get(`https://ecommerce.routemisr.com/api/v1/Brands`)
  }
  let {data}=useQuery('Brands',getBrands)

  return <>
  <h1>Brands</h1>
  <div className="container ">
  <div className="row ">
    {
      data?.data?.data?.map((Brand, index) => (
        <div key={index} className='col-6 col-md-3 text-center mb-4 Brand cursor-pointer'>
          <img src={Brand.image} alt={Brand.name} className='w-100' height={250} />
          <span className='text-main'>{Brand.name}</span>
        </div>
      ))
    }
  </div>
</div>

  
  
  </>

}
