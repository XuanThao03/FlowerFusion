import React, {Component, useEffect, useState} from 'react';
import {Header} from '../../../components/header/Header';
import {NavigationBar} from '../../../components/navigationBar/NavigationBar';
import {BtnTab} from '../../../components/btnTab/BtnTab';
import styles from '../catalog.module.scss';
import {Splide, SplideSlide, SplideTrack} from '@splidejs/react-splide';
import {IMG_Flower1, IMG_Vase1, IMG_Vase2} from '../../../assets/images';
import '@splidejs/react-splide/css';
import PriceSlider from '../../../components/filter/price/PriceSlider';
import CheckboxFilter from '../../../components/filter/checkboxFilter/checkboxFilter';
import BottomBanner from '../../../components/banner/bottomBanner';
import {NavLink, Link} from 'react-router-dom';
import ItemFlower from '../../../components/itemFlower/ItemFlower';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {
  setAllVases,
  setFilteredVases,
  setSelectedVase,
  filterVasesByColor,
  filterVasesByArrival,
  filterVasesByCategories,
  filterVasesByPrice,
  filterVases,
} from '../../../Redux/Actions/vaseAction';
import {Search} from '../../../components/searchbar/search';

const arrival = [
  {name: 'Letter box friendly', quantity: 55},
  {name: 'Comes pre-arranged', quantity: 65},
];
const quantity = [
  {name: '1-10', quantity: ''},
  {name: '11-20', quantity: ''},
  {name: '21-30', quantity: ''},
  {name: '31-40', quantity: ''},
  {name: '41-50', quantity: ''},
  {name: '51-60', quantity: ''},
  {name: '61-70', quantity: ''},
  {name: '71-80', quantity: ''},
  {name: '81-90', quantity: ''},
  {name: '91-100', quantity: ''},
  {name: 'Other', quantity: ''},
];
const categories = [
  {name: 'Aria Vase', quantity: 46},
  {name: 'Arlo Vase', quantity: 47},
  {name: 'Frosted Vase', quantity: 47},
  {name: 'Nala Vase', quantity: 47},
  {name: 'Ribbed Vase', quantity: 47},
  {name: 'State Vase', quantity: 47},
];

const colors = [
  {name: 'Black', quantity: ''},
  {name: 'Grey', quantity: ''},
  {name: 'Clear', quantity: ''},
  {name: 'Gold', quantity: ''},

];
const Vase = () => {
  const [keywords, setKeywords] = useState('');
  const filteredVases = useSelector(state => state.vases.filteredVases);
  const [selectedArrivals, setSelectedArrivals] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const dispatch = useDispatch();
  const vases = useSelector(state => state.vases.filteredVases);


  const handleVaseClick = selectedVase => {
    dispatch(setSelectedVase(selectedVase));
    localStorage.setItem('selectedVase', JSON.stringify(selectedVase));
  };
  const handleArrivalChange = arrival => {
    let newSelectedArrivals;
    if (arrival) {
      if (selectedArrivals.includes(arrival)) {
        newSelectedArrivals = selectedArrivals.filter(a => a !== arrival);
      } else {
        newSelectedArrivals = [...selectedArrivals, arrival];
      }
    } else {
      newSelectedArrivals = [];
    }

    setSelectedArrivals(newSelectedArrivals);
    if (newSelectedArrivals.length > 0) {
      dispatch(filterVasesByArrival(newSelectedArrivals));
      console.log(newSelectedArrivals);
    } else {
      console.log(newSelectedArrivals);
      dispatch(setFilteredVases(vases)); 
    }
  };
  const [selectedColors, setSelectedColors] = useState([]);
  const handleColorChange = color => {
    let newSelectedColors;
    if (color) {
      if (selectedColors.includes(color)) {
        // If the color is already selected, remove it
        newSelectedColors = selectedColors.filter(c => c !== color);
      } else {
        // If the color is not selected, add it
        newSelectedColors = [...selectedColors, color];
      }
    } else {
      // If no color is selected, reset the selected colors
      newSelectedColors = [];
    }

    setSelectedColors(newSelectedColors);

    if (newSelectedColors.length > 0) {
      dispatch(filterVasesByColor(newSelectedColors));
      console.log(newSelectedColors);
    } else {
      console.log(newSelectedColors);
      dispatch(setFilteredVases(vases)); // Reset nếu không có màu nào được chọn
    }
  };
  const handleCategoriesChange = categories => {
    let newSelectedCategories;
    if (categories) {
      if (selectedCategories.includes(categories)) {
        // If the arrival is already selected, remove it
        newSelectedCategories = selectedCategories.filter(
          a => a !== categories,
        );
      } else {
        // If the arrival is not selected, add it
        newSelectedCategories = [...selectedCategories, categories];
      }
    } else {
      // If no arrival is selected, reset the selected arrivals
      newSelectedCategories = [];
    }

    setSelectedCategories(newSelectedCategories);
    if (newSelectedCategories.length > 0) {
      dispatch(filterVasesByCategories(newSelectedCategories));
      console.log(newSelectedCategories);
    } else {
      console.log(newSelectedCategories);
      dispatch(setFilteredVases(vases)); // Reset nếu không có arrival nào được chọn
    }
  };
  const handlePriceChange = (event, newValue) => {
    // newValue is an array [minPrice, maxPrice]
    dispatch(filterVasesByPrice(newValue));
  };

  const handleFilterChange = () => {
    dispatch(filterVases(selectedColors, selectedArrivals));
  };
  useEffect(() => {
    const fetchvases = async () => {
      try {
        const response = await axios.get('/api/vases');
        dispatch(setAllVases(response.data));
      } catch (error) {
        //console.log(error.response.data.message);
        console.log(error);
      }
    };
    fetchvases();
  }, [dispatch]);

  const vaseLists = filteredVases.map(vase => {
    if (vase.name.includes(keywords.toUpperCase()))
      return (
        <NavLink
          className="flex justify-center"
          to={`/vases/detail/${vase.key}`}
          onClick={() => handleVaseClick(vase)}>
          <ItemFlower
            className={styles.itemFlower}
            img={vase.imgPath1}
            name={vase.name}
            price={vase.price}
            discount={vase.discount}
          />
        </NavLink>
      );
  });
  return (
    <div>
      <NavigationBar placeholder='All of vases'/>
      <div className={styles.catalogContainer}>
        <div className={styles.filterContainer}>
          <Search onChange={e => setKeywords(e.target.value)} />

          <PriceSlider />
          <CheckboxFilter
            title={'Arrival'}
            value={arrival}
            onFilterChangeByArrival={handleArrivalChange}
          />
          <CheckboxFilter
            title={'Categories'}
            value={categories}
            onFilterChangeByCategories={handleCategoriesChange}
          />
          { <CheckboxFilter
            title={'Color'}
            value={colors}
            onFilterChangeByColor={handleColorChange}
          /> }
          <CheckboxFilter title={'Counter'} value={quantity} />
        </div>
        <div className={styles.flowerContainer}>{vaseLists}</div>
      </div>
      <BottomBanner />
    </div>
  );
};


export default Vase;
