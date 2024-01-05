const initialState = {
  allFlowers: [],
  filteredFlowers: [],
  filters: {
    arrival: null,
    color: null,
    categories: null,
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
    case 'FILTER_FLOWERS_BY_ARRIVAL':
      const filteredByArrival = state.allFlowers.filter(
        flower => flower.arrival === action.payload,
      );
      return {
        ...state,
        filteredFlowers: filteredByArrival,
      };
    case 'FILTER_FLOWERS_BY_COLOR':
      const colorsToFilter = action.payload;
  let filteredByColors;

  if (colorsToFilter.length === 0) {
    filteredByColors = state.allFlowers;
  } else {
    // Lọc theo thứ tự màu sắc đã chọn
    filteredByColors = state.allFlowers.filter(flower =>
      colorsToFilter.includes(flower.color)
    );
  }

  return {
    ...state,
    filteredFlowers: filteredByColors,
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
