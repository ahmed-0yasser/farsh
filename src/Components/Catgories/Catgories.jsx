import React from 'react'
import style from './Catgories.module.css'
import axios from 'axios'
import { useQuery } from 'react-query'


export default function Catgories() {

  let getCategory=()=>{
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);

  }
  let {isError,isLoading,data}=useQuery('Catgories',getCategory)
  if (isLoading) {
    return <div>Loading...</div>;

  }
  if (isError) {
    return <div>Error loading categories.</div>;
  }
  return <>
    <h1 className='text-center text-main'> welcome Page Catgories.....</h1>
  <div>
  {data?.data.data?.map((category) => (
        <img key={category._id} src={category.image} className='w-25 p-2' height={250}   />
      ))}
  </div>

  </>

}
