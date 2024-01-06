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
import { useSelector, useDispatch } from 'react-redux';
import { setAllFlowers, setFilteredFlowers, setSelectedFlower, filterFlowersByColor, filterFlowersByArrival, filterFlowersByCategories} from '../../../Redux/Actions/flowerAction';


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
  const dispatch = useDispatch();
  const allFlowers = useSelector((state) => state.flowers.allFlowers);
  const filteredFlowers = useSelector((state) => state.flowers.filteredFlowers);
  const handleArrivalChange = (arrival) => {
    if (arrival) {
      dispatch(filterFlowersByArrival(arrival));
    } else {
      dispatch(setFilteredFlowers(allFlowers)); // Reset nếu không có arrival nào được chọn
    }
  };
  const handleColorChange = (color) => {
    if (color) {
      dispatch(filterFlowersByColor(color));
    } else {
      dispatch(setFilteredFlowers(allFlowers)); // Reset nếu không có màu nào được chọn
    }
  };
  const handleCategoriesChange = (categories) => {
    if (categories) {
      dispatch(filterFlowersByCategories(categories));
    } else {
      dispatch(setFilteredFlowers(allFlowers)); // Reset nếu không có màu nào được chọn
    }
  };
  
  const handleFlowerClick = (selectedFlower) => {
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
    return (
      <NavLink
      className="flex justify-center" 
      to={`/flowers/detail/${fl.key}`}
      onClick={() => handleFlowerClick(fl)}
      key={fl.key}
      >
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
      <NavigationBar placeholder="All of flowers"/>
      <div className={styles.catalogContainer}>
        <div className={styles.filterContainer}>
          <PriceSlider />
          <CheckboxFilter title={'Arrival'} value={arrival} onFilterChangeByArrival={handleArrivalChange}/>
          <CheckboxFilter title={'Categories'} value={categories} onFilterChangeByCategories={handleCategoriesChange}/>
          <CheckboxFilter title={'Color'} value={colors} onFilterChangeByColor={handleColorChange}/>
          <CheckboxFilter title={'Counter'} value={quantity} />
        </div>
        <div className={styles.flowerContainer}>{flowerLists}</div>
      </div>
      <BottomBanner />
    </div>
  );
};

export default Flower;
