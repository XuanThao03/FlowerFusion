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
import { setFlowers, setSelectedFlower } from '../../../Redux/Actions/flowerAction';


const arrival = [
  {name: 'Letter box friendly', quantity: 55},
  {name: 'Comes pre-arranged', quantity: 65},
];
const categories = [
  {name: 'Roses', quantity: 46},
  {name: 'Tulip', quantity: 47},
  {name: 'Lavenders', quantity: 40},
  {name: 'Sunflower', quantity: 55},
  {name: 'Daisy', quantity: 57},
  {name: 'Orchild', quantity: 46},
  {name: 'Lily', quantity: 46},
  {name: 'Hydrangea', quantity: 46},
  {name: 'Roses', quantity: 46},
  {name: 'Roses', quantity: 46},
  {name: 'Tulip', quantity: 46},
  {name: 'Lavenders', quantity: 46},
  {name: 'Sunflower', quantity: 46},
  {name: 'Daisy', quantity: 46},
  {name: 'Orchild', quantity: 46},
];

const colors = [
  {name: 'White', quantity: ''},
  {name: 'Pink', quantity: ''},
  {name: 'Red', quantity: ''},
  {name: 'Yello', quantity: ''},
  {name: 'Orange', quantity: ''},
  {name: 'Green', quantity: ''},
  {name: 'Blue', quantity: ''},
  {name: 'Purple', quantity: ''},
  {name: 'Black', quantity: ''},
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
  const flowers = useSelector((state) => state.flowers);

  const handleFlowerClick = (selectedFlower) => {
    dispatch(setSelectedFlower(selectedFlower));
    localStorage.setItem('selectedFlower', JSON.stringify(selectedFlower));
  };

  useEffect(() => {
    const fetchflowers = async () => {
      try {
        const response = await axios.get('/api/flowers');
        dispatch(setFlowers(response.data));
      } catch (error) {
        //console.log(error.response.data.message);
        console.log(error);
      }
    };
    fetchflowers();
  }, [dispatch]);

  const flowerLists = flowers.map(fl => {
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
      <NavigationBar />
      <div className={styles.catalogContainer}>
        <div className={styles.filterContainer}>
          <PriceSlider />
          <CheckboxFilter title={'Arrival'} value={arrival} />
          <CheckboxFilter title={'Categories'} value={categories} />
          <CheckboxFilter title={'Color'} value={colors} />
          <CheckboxFilter title={'Counter'} value={quantity} />
        </div>
        <div className={styles.flowerContainer}>{flowerLists}</div>
      </div>
      <BottomBanner />
    </div>
  );
};

export default Flower;
