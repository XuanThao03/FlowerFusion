export const setOccasions = (occasions) => ({
    type: 'SET_OCCASIONS',
    payload: occasions,
  });
  
  export const setSelectedOccasion = (occasion) => ({
    type: 'SET_SELECTED_OCCASION',
    payload: occasion,
  });