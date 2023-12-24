  // export const addToCart = (item) => {
  //   return {
  //     type: 'cart/addToCart',
  //     payload: item
  //   };
  // };

  export const addToCart = (item) => {
    return (dispatch, getState) => {
      dispatch({
        type: 'cart/addToCart',
        payload: item,
      });
      const updatedCart = getState().cart;
      localStorage.setItem('cart', JSON.stringify(updatedCart.items));
    };
  };

  export const incrementQuantity = (itemName) => {
    return (dispatch, getState) => {
      dispatch({
        type: 'cart/incrementQuantity',
        payload: itemName,
      });
  
      const updatedCart = getState().cart;
      localStorage.setItem('cart', JSON.stringify(updatedCart.items));
    };
  };
  
  export const decrementQuantity = (itemName) => {
    return (dispatch, getState) => {
      dispatch({
        type: 'cart/decrementQuantity',
        payload: itemName,
      });
  
      const updatedCart = getState().cart;
      localStorage.setItem('cart', JSON.stringify(updatedCart.items));
    };
  };
  
  export const removeFromCart = (itemName) => {
    return (dispatch, getState) => {
      dispatch({
        type: 'cart/removeFromCart',
        payload: itemName,
      });
  
      const updatedCart = getState().cart;
      localStorage.setItem('cart', JSON.stringify(updatedCart.items));
    };
  };