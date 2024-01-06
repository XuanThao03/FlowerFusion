// export const addToCart = (item) => {
//   return {
//     type: 'cart/addToCart',
//     payload: item
//   };
// };

import axios from 'axios';

export const addToCart = item => {
  return (dispatch, getState) => {
    dispatch({
      type: 'cart/addToCart',
      payload: item,
    });
    const updatedCart = getState().cart;
    localStorage.setItem('cart', JSON.stringify(updatedCart.items));
  };
};

export const incrementQuantity = itemName => {
  return (dispatch, getState) => {
    dispatch({
      type: 'cart/incrementQuantity',
      payload: itemName,
    });

    const updatedCart = getState().cart;
    localStorage.setItem('cart', JSON.stringify(updatedCart.items));
  };
};

export const decrementQuantity = itemName => {
  return (dispatch, getState) => {
    dispatch({
      type: 'cart/decrementQuantity',
      payload: itemName,
    });

    const updatedCart = getState().cart;
    localStorage.setItem('cart', JSON.stringify(updatedCart.items));
  };
};

export const removeFromCart = itemName => {
  return (dispatch, getState) => {
    dispatch({
      type: 'cart/removeFromCart',
      payload: itemName,
    });

    const updatedCart = getState().cart;
    localStorage.setItem('cart', JSON.stringify(updatedCart.items));
  };
};
export const deleteCart = () => dispatch => {
  localStorage.removeItem('cart');
  dispatch({type: 'cart/deleteCart'});
};
export const setCartData = cartItems => {
  return {
    type: 'SET_CART_ITEMS',
    payload: cartItems,
  };
};
//push cart to dtb
export const pushCart =
  (quantity, total, products) => async (dispatch, getState) => {
    console.log('quantity', quantity);
    const userInfo = getState().userLogin;

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.userInfo.token}`,
        },
      };
      const {data} = await axios.post(
        `/api/carts/update`,
        {userEmail: userInfo.userInfo.email, quantity, total, products},
        config,
      );
      dispatch({
        type: 'pushCart',
      });
    } catch (error) {
      console.log(error);
    }
  };

//delete cart to dtb
export const deleteCartDtb = () => async (dispatch, getState) => {
  const userInfo = getState().userLogin;

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.userInfo.token}`,
      },
    };
    const {data} = await axios.post(
      `/api/carts/deletecart`,
      {userEmail: userInfo.userInfo.email},
      config,
    );
  } catch (error) {
    console.log(error);
  }
};
