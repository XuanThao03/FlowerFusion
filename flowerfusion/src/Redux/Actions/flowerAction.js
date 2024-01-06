// actions.js
export const setFlowers = flowers => ({
  type: 'SET_FLOWERS',
  payload: flowers,
});
export const setAllFlowers = flowers => ({
  type: 'SET_ALL_FLOWERS',
  payload: flowers,
});
export const setFilteredFlowers = flowers => ({
  type: 'SET_FILTERED_FLOWERS',
  payload: flowers,
});
export const setSelectedFlower = flower => ({
  type: 'SET_SELECTED_FLOWER',
  payload: flower,
});
export const filterFlowersByArrival = filterType => ({
  type: 'FILTER_FLOWERS_BY_ARRIVAL',
  payload: filterType,
});
export const filterFlowersByColor = color => ({
  type: 'FILTER_FLOWERS_BY_COLOR',
  payload: color,
});
export const filterFlowersByCategories = categories => ({
  type: 'FILTER_FLOWERS_BY_CATEGORIES',
  payload: categories,
});
export const filterFlowersByPrice = priceRange => ({
  type: 'FILTER_FLOWERS_BY_PRICE',
  payload: priceRange,
});
export const filterFlowers = (arrivals, colors) => ({
  type: 'FILTER_FLOWERS',
  payload: {arrivals, colors},
});
