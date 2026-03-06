import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast'

export default function ProdactDitals() {
  let params = useParams()
  const { addToCart } = useContext(CartContext);
  const [loadingBtn, setLoadingBtn] = useState(false);

  let { data, isLoading } = useQuery('prodactDetails', () => getProdactDitals(params.id))

  function getProdactDitals(id) {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }

  async function handleAddToCart(productId) {
    setLoadingBtn(true);
    let response = await addToCart(productId);
    if (response?.data?.status === 'success') {
      toast.success(response.data.message || 'Product added to cart!', { duration: 2000 });
    } else {
      toast.error('Failed to add product to cart', { duration: 2000 });
    }
    setLoadingBtn(false);
  }

  if (isLoading) {
    return (
      <div className='w-100 py-5 d-flex justify-content-center'>
        <i className="fa-solid fa-spinner fa-spin fa-2x"></i>
      </div>
    );
  }

  return <>
    {data?.data.data ? (
      <div className='row py-4 d-flex align-items-center'>
        <div className="col-md-4">
          <img className='w-100' src={data.data.data.imageCover} alt={data.data.data.title} />
        </div>
        <div className="col-md-8">
          <h2>{data.data.data.title}</h2>
          <p className='text-muted'>{data.data.data.description}</p>
          <h6 className='text-main'>{data.data.data.category.name}</h6>
          <h6 className='text-main'>Price: {data.data.data.price} EGP</h6>
          <div className='d-flex justify-content-between mb-3'>
            <span>
              <i className="fa-solid fa-star rating-color"></i> {data.data.data.ratingsAverage}
            </span>
          </div>
          <button
            onClick={() => handleAddToCart(data.data.data.id)}
            className='w-100 bg-main text-white btn mt-2'
            disabled={loadingBtn}
          >
            {loadingBtn ? (
              <i className="fa-solid fa-spinner fa-spin"></i>
            ) : (
              'Add to Cart'
            )}
          </button>
        </div>
      </div>
    ) : (
      <div className='w-100 py-5 d-flex justify-content-center'>
        <i className="fa-solid fa-spinner fa-spin fa-2x"></i>
      </div>
    )}
  </>
}
