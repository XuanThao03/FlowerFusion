export const setVases = vases => ({
  type: 'SET_ALL_VASES',
  payload: vases,
});

export const setSelectedVase = vase => ({
  type: 'SET_SELECTED_VASE',
  payload: vase,
});
export const setAllVases = vases => ({
  type: 'SET_ALL_VASES',
  payload: vases,
});
export const setFilteredVases = vases => ({
  type: 'SET_FILTERED_VASES',
  payload: vases,
});

export const filterVasesByArrival = filterType => ({
  type: 'FILTER_VASES_BY_ARRIVAL',
  payload: filterType,
});
export const filterVasesByColor = color => ({
  type: 'FILTER_VASES_BY_COLOR',
  payload: color,
});
export const filterVasesByCategories = categories => ({
  type: 'FILTER_VASES_BY_CATEGORIES',
  payload: categories,
});
export const filterVasesByPrice = priceRange => ({
  type: 'FILTER_VASES_BY_PRICE',
  payload: priceRange,
});
export const filterVases = (arrivals, colors) => ({
  type: 'FILTER_VASES',
  payload: {arrivals, colors},
});
