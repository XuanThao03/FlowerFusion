
// const flowersReducer = (state = [], action) => {
//     switch (action.type) {
//       case 'SET_FLOWERS':
//         return action.payload;
//       default:
//         return state;
//     }
//   };
  

//   const selectedFlowerReducer = (state = {}, action) => {
//     switch (action.type) {
//       case 'SET_SELECTED_FLOWER':
//         return action.payload;
//       default:
//         return state;
//     }
//   };
  
//   export default { flowersReducer, selectedFlowerReducer };
  export const flowersReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_FLOWERS':
        return action.payload;
      default:
        return state;
    }
  };
  
  export const selectedFlowerReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_SELECTED_FLOWER':
        return action.payload;
      default:
        return state;
    }
  };