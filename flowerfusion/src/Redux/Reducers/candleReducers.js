export const candlesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CANDLES':
      return action.payload;
    default:
      return state;
  }
};

export const selectedCandleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SELECTED_CANDLE':
      return action.payload;
    default:
      return state;
  }
};
