import React, { useContext, useEffect, useState } from 'react';

import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';

export default function Cart() {
  let { addLoggedUserCart, removeCartItem, updateProductQuantity, clearCart } = useContext(CartContext);
  let [productDetails, setProductDetails] = useState(null);
  let [loading, setLoading] = useState(true);

  async function updateQuantity(id, count) {
    if (count <= 0) {
      await removeItem(id);
      return;
    }
    let response = await updateProductQuantity(id, count);
    if (response?.data) {
      setProductDetails(response.data);
    }
  }

  async function removeItem(id) {
    let response = await removeCartItem(id);
    if (response?.data) {
      setProductDetails(response.data);
      toast.success('Product removed from cart', { duration: 2000 });
    }
  }

  async function handleClearCart() {
    await clearCart();
    setProductDetails(null);
    toast.success('Cart cleared', { duration: 2000 });
  }

  async function getCart() {
    setLoading(true);
    let response = await addLoggedUserCart();
    if (response?.data) {
      setProductDetails(response.data);
    }
    setLoading(false);
  }

  useEffect(() => {
    getCart();
  }, [getCart]);

  if (loading) {
    return (
      <div className='d-flex justify-content-center align-items-center py-5'>
        <i className="fa-solid fa-spinner fa-spin fa-3x text-main"></i>
      </div>
    );
  }

  return (
    <>
      {productDetails && productDetails.numOfCartItems > 0 ? (
        <div className="w-75 my-3 mx-auto p-3 bg-main-light">
          <div className='d-flex justify-content-between align-items-center mb-3'>
            <h3>Shopping Cart</h3>
            <button onClick={handleClearCart} className='btn btn-outline-danger'>
              <i className="fa-solid fa-trash me-1"></i> Clear Cart
            </button>
          </div>
          <h4 className='h6 text-main'>Cart Items: {productDetails.numOfCartItems}</h4>
          <h4 className='h6 text-main'>Total Price: {productDetails.data?.totalCartPrice} EGP</h4>

          {productDetails.data?.products?.map((product) => (
            <div key={product.product.id} className="row border-bottom py-3 align-items-center">
              <div className='col-md-2'>
                <img className='w-100' src={product.product.imageCover} alt={product.product.title} />
              </div>
              <div className="col-md-10">
                <div className='d-flex justify-content-between align-items-center'>
                  <div>
                    <h3 className='h6'>{product.product.title}</h3>
                    <p className='text-main'>Price: {product.price} EGP</p>
                  </div>
                  <div className='d-flex align-items-center'>
                    <button onClick={() => updateQuantity(product.product.id, product.count + 1)} className='btn border-main p-2'>+</button>
                    <span className='p-3 fw-bold'>{product.count}</span>
                    <button onClick={() => updateQuantity(product.product.id, product.count - 1)} className='btn border-main p-2'>-</button>
                  </div>
                </div>
                <button onClick={() => removeItem(product.product.id)} className='p-0 btn'>
                  <i className="text-danger fa-regular fa-trash-can me-1"></i> Remove
                </button>
              </div>
            </div>
          ))}

          <button className='btn bg-main text-white w-50 mt-3'>Online Payment</button>
        </div>
      ) : (
        <div className='text-center py-5'>
          <i className="fa-solid fa-cart-shopping fa-3x text-muted mb-3"></i>
          <h3 className='text-muted'>Your cart is empty</h3>
          <p className='text-muted'>Start adding products to your cart!</p>
        </div>
      )}
    </>
  );
}
