export const vasesReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_VASES':
        return action.payload;
      default:
        return state;
    }
  };
  
  export const selectedVaseReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_SELECTED_VASE':
        return action.payload;
      default:
        return state;
    }
  };