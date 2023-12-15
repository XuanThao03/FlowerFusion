  export const addToCart = (item) => {
    return {
      type: 'cart/addToCart',
      payload: item
    };
  };
  export const incrementQuantity = (itemName) => {
    return {
      type: 'cart/incrementQuantity',
      payload: itemName
    };
  };
  
  export const decrementQuantity = (itemName) => {
    return {
      type: 'cart/decrementQuantity',
      payload: itemName
    };
  };
  
  export const removeFromCart = (itemName,) => ({
    type: 'cart/removeFromCart',
    payload: itemName,
  });