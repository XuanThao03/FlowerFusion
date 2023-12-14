// actions.js
export const setFlowers = (flowers) => ({
    type: 'SET_FLOWERS',
    payload: flowers,
  });
  
  export const setSelectedFlower = (flower) => ({
    type: 'SET_SELECTED_FLOWER',
    payload: flower,
  });
  