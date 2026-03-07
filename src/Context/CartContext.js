import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export function CartContextProvider(props) {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  function getHeaders() {
    let token = localStorage.getItem('usertoken');
    if (token === null || token === 'null' || token === '') {
        console.warn("CartContext: Token is missing or invalid in localStorage!");
        token = "";
    }
    return { token: token };
  }

  async function addToCart(productId) {
    try {
      console.log("CartContext: Adding to cart, productId:", productId);
      const response = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { productId: productId },
        { headers: getHeaders() }
      );
      console.log("CartContext: Add to cart response:", response);
      setCartItemsCount(response.data?.numOfCartItems || 0);
      return response;
    } catch (error) {
      console.error("CartContext: Add to cart error:", error.response || error);
      return error.response || error;
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
      console.error("CartContext: Get cart error:", err.response || err);
      return err.response || err;
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
      return error.response || error;
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
      return error.response || error;
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
      return error.response || error;
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
