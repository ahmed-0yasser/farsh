import React, { useContext, useState } from 'react'
import style from './About.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from 'react-query'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast'

export default function About() {
  const { addToCart } = useContext(CartContext);
  const [loadingBtn, setLoadingBtn] = useState(null);

  async function handleAddToCart(productId) {
    setLoadingBtn(productId);
    let response = await addToCart(productId);
    if (response?.data?.status === 'success') {
      toast.success(response.data.message || 'Product added to cart!', { duration: 2000 });
    } else {
      toast.error('Failed to add product to cart', { duration: 2000 });
    }
    setLoadingBtn(null);
  }

  function getfeathuredprodact() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/products')
  }

  let { data, isLoading } = useQuery('feathuredprodact', getfeathuredprodact)

  return <>
    {isLoading ? (
      <div className='w-100 py-5 d-flex justify-content-center'>
        <i className="fa-solid fa-arrow-rotate-right fa-spin fa-2x"></i>
      </div>
    ) : (
      <div className='container py-2'>
        <h2 className='text-center py-4 rating-color'>Featured Products</h2>
        <div className='row'>
          {data?.data.data.map((product) => (
            <div key={product.id} className='col-md-2'>
              <Link to={`/prodactditals/${product.id}`}>
                <div className='product cursor-pointer py-3 px-2'>
                  <img className='w-100' src={product.imageCover} alt={product.title} />
                  <span className='text-main font-sm fw-bolder'>{product.category.name}</span>
                  <h3 className='h6'>{product.title.split(" ").slice(0, 2).join(' ')}</h3>
                  <div className='d-flex justify-content-between mt-2'>
                    <span>{product.price} EGP</span>
                    <span><i className='fas fa-star rating-color'></i> {product.ratingsAverage}</span>
                  </div>
                </div>
              </Link>
              <button
                onClick={() => handleAddToCart(product.id)}
                className='w-100 btn-sm mt-2 text-white btn bg-main'
                disabled={loadingBtn === product.id}
              >
                {loadingBtn === product.id ? (
                  <i className="fa-solid fa-spinner fa-spin"></i>
                ) : (
                  'Add to cart'
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    )}
  </>
}
