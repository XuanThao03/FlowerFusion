import React, {Component, useEffect, useState} from 'react';
import {Header} from '../../../components/header/Header';
import {NavigationBar} from '../../../components/navigationBar/NavigationBar';
import {BtnTab} from '../../../components/btnTab/BtnTab';
import styles from '../catalog.module.scss';
import {Splide, SplideSlide, SplideTrack} from '@splidejs/react-splide';
import {IMG_Flower1, IMG_Flower2, IMG_Flower3} from '../../../assets/images';
import '@splidejs/react-splide/css';
import PriceSlider from '../../../components/filter/price/PriceSlider';
import CheckboxFilter from '../../../components/filter/checkboxFilter/checkboxFilter';
import BottomBanner from '../../../components/banner/bottomBanner';
import {NavLink, Link} from 'react-router-dom';
import ItemFlower from '../../../components/itemFlower/ItemFlower';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {
  setAllFlowers,
  setFilteredFlowers,
  setSelectedFlower,
  filterFlowersByColor,
  filterFlowersByArrival,
  filterFlowersByCategories,
  filterFlowersByPrice,
  filterFlowers,
} from '../../../Redux/Actions/flowerAction';
import {Search} from '../../../components/searchbar/search';

const arrival = [
  {name: 'Letter box friendly', quantity: 55},
  {name: 'Comes pre-arranged', quantity: 65},
];
const categories = [
  {name: 'Kiku', quantity: 46},
  {name: 'Pampas Grass', quantity: 47},
  {name: 'Faux Hydrangea', quantity: 40},
];

const colors = [
  {name: 'Umber', quantity: ''},
  {name: 'Cream', quantity: ''},
  {name: 'Grey', quantity: ''},
  {name: 'Boho', quantity: ''},
  {name: 'Yellow', quantity: ''},
  {name: 'Dusky', quantity: ''},
  {name: 'Green', quantity: ''},
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
const Flower = () => {
  const [keywords, setKeywords] = useState('');

  const dispatch = useDispatch();
  const allFlowers = useSelector(state => state.flowers.allFlowers);
  const filteredFlowers = useSelector(state => state.flowers.filteredFlowers);
  const [selectedArrivals, setSelectedArrivals] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleArrivalChange = arrival => {
    let newSelectedArrivals;
    if (arrival) {
      if (selectedArrivals.includes(arrival)) {
        // If the arrival is already selected, remove it
        newSelectedArrivals = selectedArrivals.filter(a => a !== arrival);
      } else {
        // If the arrival is not selected, add it
        newSelectedArrivals = [...selectedArrivals, arrival];
      }
    } else {
      // If no arrival is selected, reset the selected arrivals
      newSelectedArrivals = [];
    }

    setSelectedArrivals(newSelectedArrivals);
    if (newSelectedArrivals.length > 0) {
      dispatch(filterFlowersByArrival(newSelectedArrivals));
      console.log(newSelectedArrivals);
    } else {
      console.log(newSelectedArrivals);
      dispatch(setFilteredFlowers(allFlowers)); // Reset nếu không có arrival nào được chọn
    }
  };

  const handleFilterChange = () => {
    dispatch(filterFlowers(selectedColors, selectedArrivals));
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
      dispatch(filterFlowersByColor(newSelectedColors));
      console.log(newSelectedColors);
    } else {
      console.log(newSelectedColors);
      dispatch(setFilteredFlowers(allFlowers)); // Reset nếu không có màu nào được chọn
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
      dispatch(filterFlowersByCategories(newSelectedCategories));
      console.log(newSelectedCategories);
    } else {
      console.log(newSelectedCategories);
      dispatch(setFilteredFlowers(allFlowers)); // Reset nếu không có arrival nào được chọn
    }
  };

  const handlePriceChange = (event, newValue) => {
    // newValue is an array [minPrice, maxPrice]
    dispatch(filterFlowersByPrice(newValue));
  };

  const handleFlowerClick = selectedFlower => {
    dispatch(setSelectedFlower(selectedFlower));
    localStorage.setItem('selectedFlower', JSON.stringify(selectedFlower));
  };

  useEffect(() => {
    const fetchflowers = async () => {
      try {
        const response = await axios.get('/api/flowers');
        dispatch(setAllFlowers(response.data)); // Sử dụng hành động setAllFlowers
      } catch (error) {
        console.log(error);
      }
    };
    fetchflowers();
  }, [dispatch]);

  const flowerLists = filteredFlowers.map(fl => {
    if (fl.name.includes(keywords.toUpperCase()))
      return (
        <NavLink
          className="flex justify-center"
          to={`/flowers/detail/${fl.key}`}
          onClick={() => handleFlowerClick(fl)}
          key={fl.key}>
          <ItemFlower
            className={styles.itemFlower}
            img={fl.imgPath1}
            name={fl.name}
            price={fl.price1}
            discount={fl.discount}
          />
        </NavLink>
      );
  });

  return (
    <div>
      {/* <Header /> */}
      <NavigationBar />
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
          <CheckboxFilter
            title={'Color'}
            value={colors}
            onFilterChangeByColor={handleColorChange}
          />
          <CheckboxFilter title={'Counter'} value={quantity} />
        </div>
        <div className={styles.flowerContainer}>{flowerLists}</div>
      </div>
      <BottomBanner />
    </div>
  );
};

export default Flower;
