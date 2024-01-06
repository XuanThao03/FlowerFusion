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
      const arrivalsToFilter = action.payload;
      let filteredByArrivals;

      if (arrivalsToFilter.length === 0) {
        filteredByArrivals = state.allFlowers;
      } else {
        // Lọc theo thứ tự màu sắc đã chọn
        filteredByArrivals = state.allFlowers.filter(flower =>
          arrivalsToFilter.includes(flower.arrival),
        );
      }

      return {
        ...state,
        filteredFlowers: filteredByArrivals,
      };

      case 'FILTER_FLOWERS_BY_CATEGORIES':
      const categoriesToFilter = action.payload;
      let filteredByCategories;

      if (categoriesToFilter.length === 0) {
        filteredByCategories = state.allFlowers;
      } else {
        // Lọc theo thứ tự màu sắc đã chọn
        filteredByCategories = state.allFlowers.filter(flower =>
          categoriesToFilter.includes(flower.categories),
        );
      }

      return {
        ...state,
        filteredFlowers: filteredByCategories,
      };

    case 'FILTER_FLOWERS_BY_COLOR':
      const colorsToFilter = action.payload;
      let filteredByColors;

      if (colorsToFilter.length === 0) {
        filteredByColors = state.allFlowers;
      } else {
        // Lọc theo thứ tự màu sắc đã chọn
        filteredByColors = state.allFlowers.filter(flower =>
          colorsToFilter.includes(flower.color),
        );
      }

      return {
        ...state,
        filteredFlowers: filteredByColors,
      };

    case 'FILTER_FLOWERS_BY_PRICE':
      const [minPrice, maxPrice] = action.payload;

      const filteredByPrice = state.allFlowers.filter(flower => {
        let price = parseInt(flower.price1) * 1000;
        // console.log(price);
        // console.log(flower.price1 <= maxPrice);
        return price >= minPrice && price <= maxPrice;
      });

      return {
        ...state,
        filteredFlowers: filteredByPrice,
      };
    case 'FILTER_FLOWERS':
      const {arrivals, colors} = action.payload;
      let filteredFlowers = state.allFlowers;

      if (arrivals.length > 0) {
        filteredFlowers = filteredFlowers.filter(flower =>
          arrivals.includes(flower.arrival),
        );
      }

      if (colors.length > 0) {
        filteredFlowers = filteredFlowers.filter(flower =>
          colors.includes(flower.color),
        );
      }

      return {
        ...state,
        filteredFlowers: filteredFlowers,
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
