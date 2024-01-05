
const initialState = {
  allFlowers: [],
  filteredFlowers: [],
  filters: {
    arrival: null,
    color: null,
    categories: null,
    // Các bộ lọc khác nếu có
  },
};

export const flowersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ALL_FLOWERS':
      return {
        ...state,
        allFlowers: action.payload,
        filteredFlowers: action.payload, // Đặt cả hai khi lấy dữ liệu lần đầu
      };
    case 'SET_FILTERED_FLOWERS':
      return {
        ...state,
        filteredFlowers: action.payload,
      };
    // Thêm các case khác nếu cần
    case 'FILTER_FLOWERS_BY_ARRIVAL':
      const filteredByArrival = state.allFlowers.filter(flower =>
        flower.arrival === action.payload
      );
      return {
        ...state,
        filteredFlowers: filteredByArrival,
      };
    case 'FILTER_FLOWERS_BY_COLOR':
      const filteredByColor = state.allFlowers.filter(flower =>
        flower.color === action.payload
      );
      return {
        ...state,
        filteredFlowers: filteredByColor,
      };
    case 'FILTER_FLOWERS_BY_CATEGORIES':
      const filteredByCategories = state.allFlowers.filter(flower =>
        flower.categories === action.payload
      );
      return {
        ...state,
        filteredFlowers: filteredByCategories,
      };
      
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