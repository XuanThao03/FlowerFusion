const initialState = {
  vases: [],
  filteredVases: [],
  filters: {
    arrival: null,
    color: null,
    categories: null,
  },
};

export const vasesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ALL_VASES':
      return {
        ...state,
        vases: action.payload,
        filteredVases: action.payload, // Đặt cả hai khi lấy dữ liệu lần đầu
      };
    case 'SET_FILTERED_VASES':
      return {
        ...state,
        filteredVases: action.payload,
      };
    case 'FILTER_VASES_BY_ARRIVAL':
      const arrivalsToFilter = action.payload;
      let filteredByArrivals;

      if (arrivalsToFilter.length === 0) {
        filteredByArrivals = state.vases;
      } else {
        // Lọc theo thứ tự màu sắc đã chọn
        filteredByArrivals = state.vases.filter(vase =>
          arrivalsToFilter.includes(vase.arrival),
        );
      }

      return {
        ...state,
        filteredVases: filteredByArrivals,
      };

      case 'FILTER_VASES_BY_CATEGORIES':
      const categoriesToFilter = action.payload;
      let filteredByCategories;

      if (categoriesToFilter.length === 0) {
        filteredByCategories = state.vases;
      } else {
        // Lọc theo thứ tự màu sắc đã chọn
        filteredByCategories = state.vases.filter(vase =>
          categoriesToFilter.includes(vase.categories),
        );
      }

      return {
        ...state,
        filteredVases: filteredByCategories,
      };

    case 'FILTER_VASES_BY_COLOR':
      const colorsToFilter = action.payload;
      let filteredByColors;

      if (colorsToFilter.length === 0) {
        filteredByColors = state.vases;
      } else {
        // Lọc theo thứ tự màu sắc đã chọn
        filteredByColors = state.vases.filter(vase =>
          colorsToFilter.includes(vase.color),
        );
      }

      return {
        ...state,
        filteredVases: filteredByColors,
      };

    case 'FILTER_VASES_BY_PRICE':
      const [minPrice, maxPrice] = action.payload;

      const filteredByPrice = state.vases.filter(vase => {
        let price = parseInt(vase.price1) * 1000;
        // console.log(price);
        // console.log(flower.price1 <= maxPrice);
        return price >= minPrice && price <= maxPrice;
      });

      return {
        ...state,
        filteredVases: filteredByPrice,
      };
    case 'FILTER_VASES':
      const {arrivals, colors} = action.payload;
      let filteredVases = state.vases;

      if (arrivals.length > 0) {
        filteredVases = filteredVases.filter(vase =>
          arrivals.includes(vase.arrival),
        );
      }

      if (colors.length > 0) {
        filteredVases = filteredVases.filter(vase =>
          colors.includes(vase.color),
        );
      }

      return {
        ...state,
        filteredVases: filteredVases,
      };

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
