import axios from 'axios';
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartContextProvider(props) {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  function getHeaders() {
    return { token: localStorage.getItem('usertoken') };
  }

  async function addToCart(productId) {
    try {
      const response = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { productId: productId },
        { headers: getHeaders() }
      );
      setCartItemsCount(response.data?.numOfCartItems || 0);
      return response;
    } catch (error) {
      return error;
    }
  }

  async function addLoggedUserCart() {
    try {
      const response = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { headers: getHeaders() }
      );
      setCartItemsCount(response.data?.numOfCartItems || 0);
      return response;
    } catch (err) {
      return err;
    }
  }

  async function removeCartItem(productId) {
    try {
      const response = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        { headers: getHeaders() }
      );
      setCartItemsCount(response.data?.numOfCartItems || 0);
      return response;
    } catch (error) {
      return error;
    }
  }

  async function updateProductQuantity(productId, count) {
    try {
      const response = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        { count: count },
        { headers: getHeaders() }
      );
      setCartItemsCount(response.data?.numOfCartItems || 0);
      return response;
    } catch (error) {
      return error;
    }
  }

  async function clearCart() {
    try {
      const response = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { headers: getHeaders() }
      );
      setCartItemsCount(0);
      return response;
    } catch (error) {
      return error;
    }
  }

  return (
    <CartContext.Provider
      value={{
        addToCart,
        addLoggedUserCart,
        removeCartItem,
        updateProductQuantity,
        clearCart,
        cartItemsCount,
        setCartItemsCount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
