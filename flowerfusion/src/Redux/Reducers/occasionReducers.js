
export const occasionsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_OCCASIONS':
        return action.payload;
      default:
        return state;
    }
  };
  
  export const selectedOccasionReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_SELECTED_OCCASION':
        return action.payload;  
      default:
        return state;
    }
  };