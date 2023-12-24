import React, {Component, useEffect, useState} from 'react';
import {Header} from '../../../components/header/Header';
import {NavigationBar} from '../../../components/navigationBar/NavigationBar';
import {BtnTab} from '../../../components/btnTab/BtnTab';
import styles from '../catalog.module.scss';
import {Splide, SplideSlide, SplideTrack} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import PriceSlider from '../../../components/filter/price/PriceSlider';
import CheckboxFilter from '../../../components/filter/checkboxFilter/checkboxFilter';
import BottomBanner from '../../../components/banner/bottomBanner';
import {NavLink, Link} from 'react-router-dom';
import ItemFlower from '../../../components/itemFlower/ItemFlower';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setOccasions, setSelectedOccasion } from '../../../Redux/Actions/occasionAction';

const categories = [
  {name: 'Birthday', quantity: 46},
  {name: 'Wedding', quantity: 47},
  {name: 'Christmas', quantity: 40},
  {name: 'Christmas', quantity: 40},
  {name: 'Aniversary', quantity: 55},
  {name: 'Graduation', quantity: 57},
];
const Occasion = () => {
  const dispatch = useDispatch();
  const occasions = useSelector((state) => state.occasions);

  const handleOccasionClick = (selectedOccasion) => {
    dispatch(setSelectedOccasion(selectedOccasion));
    localStorage.setItem('selectedOccasion', JSON.stringify(selectedOccasion));
  };

  useEffect(() => {
    const fetchoccasions = async () => {
      try {
        const response = await axios.get('/api/occasions');
        dispatch(setOccasions(response.data));
      } catch (error) {
        //console.log(error.response.data.message);
        console.log(error);
      }
    };
    fetchoccasions();
  }, [dispatch]);
const occasionLists = occasions.map(Occasion => {
  return (
    <Link className="flex justify-center" 
          to={`/occasions/detail/${Occasion.key}`}
          onClick={() => handleOccasionClick(Occasion)}>
      <ItemFlower
        className={styles.itemFlower}
        img={Occasion.imgPath1}
        name={Occasion.name}
        price={Occasion.price1}
        discount={Occasion.discount}
      />
    </Link>
  );
});
    return (
      <div>
        <NavigationBar />
        <div className={styles.catalogContainer}>
          <div className={styles.filterContainer}>
            <PriceSlider />
            <CheckboxFilter title={'Categories'} value={categories} />
          </div>
          <div className={styles.flowerContainer}>{occasionLists}</div>
        </div>
        <BottomBanner />
      </div>
    );
  };

export default Occasion;
