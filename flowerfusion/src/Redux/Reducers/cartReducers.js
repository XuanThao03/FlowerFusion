const initialState = {
  items: [],
  isPushed: false,
};

const storedCart = localStorage.getItem('cart');
if (storedCart) {
  initialState.items = JSON.parse(storedCart);
  initialState.isPushed = false;
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'cart/addToCart':
      if (action.payload.type === 'flower') {
        const existingFlowerIndex = state.items.findIndex(
          item =>
            item.name === action.payload.name &&
            item.price === action.payload.price &&
            item.type === 'flower',
        );
        const priceAsNumber = parseInt(
          action.payload.price.replace(/\D/g, ''),
          10,
        );
        if (existingFlowerIndex >= 0) {
          const newItems = [...state.items];
          const existingItem = newItems[existingFlowerIndex];
          const updatedQuantity =
            existingItem.quantity + action.payload.quantity;
          const updatedTotalPrice = updatedQuantity * priceAsNumber;
          const formattedTotalPrice = updatedTotalPrice.toLocaleString('vi-VN');
          newItems[existingFlowerIndex] = {
            ...existingItem,
            quantity: updatedQuantity,
            price: formattedTotalPrice,
          };
          return {...state, items: newItems, isPushed: false};
        } else {
          return {
            ...state,
            items: [
              ...state.items,
              {...action.payload, price: action.payload.price},
            ],
            isPushed: false,
          };
        }
      } else {
        const existingItemIndex = state.items.findIndex(
          item => item.name === action.payload.name,
        );
        if (existingItemIndex >= 0) {
          const newItems = [...state.items];
          const priceAsNumberExist = parseInt(
            newItems[existingItemIndex].price.replace(/\D/g, ''),
            10,
          );
          const priceAsNumber = parseInt(
            action.payload.price.replace(/\D/g, ''),
            10,
          );
          const updatedTotalPrice = priceAsNumberExist + priceAsNumber;
          const formattedTotalPrice = updatedTotalPrice.toLocaleString('vi-VN');
          newItems[existingItemIndex] = {
            ...newItems[existingItemIndex],
            quantity:
              newItems[existingItemIndex].quantity + action.payload.quantity,
            price: formattedTotalPrice,
          };
          return {
            ...state,
            items: newItems,
            isPushed: false,
          };
        } else {
          return {
            ...state,
            items: [...state.items, action.payload],
            isPushed: false,
          };
        }
      }
    case 'cart/incrementQuantity':
      const indexToIncrement = state.items.findIndex(
        item =>
          item.name === action.payload.name &&
          item.price === action.payload.price,
      );
      if (indexToIncrement >= 0) {
        const updatedItems = state.items.map((item, index) => {
          if (index === indexToIncrement) {
            const updatedQuantity = item.quantity + 1;
            const priceExist = parseInt(item.price.replace(/\D/g, ''), 10);
            const pricePerItem = priceExist / item.quantity;
            const updatedPrice = pricePerItem * updatedQuantity;
            const formattedTotalPrice = updatedPrice.toLocaleString('vi-VN');
            return {
              ...item,
              quantity: updatedQuantity,
              price: formattedTotalPrice,
              isPushed: false,
            };
          }
          return item;
        });
        return {
          ...state,
          items: updatedItems,
          isPushed: false,
        };
      }
      return state;

    case 'cart/decrementQuantity':
      const indexToDecrement = state.items.findIndex(
        item =>
          item.name === action.payload.name &&
          item.price === action.payload.price,
      );
      if (indexToDecrement >= 0 && state.items[indexToDecrement].quantity > 1) {
        const updatedItems = state.items.map((item, index) => {
          if (index === indexToDecrement) {
            const updatedQuantity = item.quantity - 1;
            const priceExist = parseInt(item.price.replace(/\D/g, ''), 10);
            const pricePerItem = priceExist / item.quantity;
            const updatedPrice = pricePerItem * updatedQuantity;
            const formattedTotalPrice = updatedPrice.toLocaleString('vi-VN');
            return {
              ...item,
              quantity: updatedQuantity,
              price: formattedTotalPrice,
              isPushed: false,
            };
          }
          return item;
        });
        return {
          ...state,
          items: updatedItems,
          isPushed: false,
        };
      }
      return state;

    case 'cart/removeFromCart':
      const {name, price} = action.payload;
      const updatedItems = state.items.filter(
        item => item.name !== name || item.price !== price,
      );
      return {...state, items: updatedItems, isPushed: false};
    case 'SET_CART_ITEMS':
        return {
          ...state,
          items: action.payload,
        };
    case 'cart/deleteCart':
      return {...state, items: []};
    case 'pushCart':
      return {
        ...state,
        items: [...state.items],
        isPushed: true,
      };
    default:
      return state;
  }
};
