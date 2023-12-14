import React, {Component, useEffect, useState} from 'react';
import {Header} from '../../../components/header/Header';
import {NavigationBar} from '../../../components/navigationBar/NavigationBar';
import {BtnTab} from '../../../components/btnTab/BtnTab';
import styles from '../catalog.module.scss';
import {Splide, SplideSlide, SplideTrack} from '@splidejs/react-splide';
import {IMG_Flower1, IMG_Candle1, IMG_Candle2} from '../../../assets/images';
import '@splidejs/react-splide/css';
import PriceSlider from '../../../components/filter/price/PriceSlider';
import CheckboxFilter from '../../../components/filter/checkboxFilter/checkboxFilter';
import BottomBanner from '../../../components/banner/bottomBanner';
import {NavLink, Link} from 'react-router-dom';
import ItemFlower from '../../../components/itemFlower/ItemFlower';
import axios from 'axios';

const categories = [
  {name: 'Candle', quantity: 46},
  {name: 'CandleStick ', quantity: 47},
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
const Candle = () => {
  const [candles, setCandles] = useState([]);
  useEffect(() => {
    const fetchcandles = async () => {
      try {
        await axios.get('/api/candles').then(res => {
          console.log(res);
          setCandles(res.data);
        });
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchcandles();
  }, []);
const CandleLists = candles.map(Candle => {
  return (
    <NavLink className="flex justify-center" to="/candles/detail" exact={true}>
      <ItemFlower
        className={styles.itemFlower}
        img={Candle.imgPath}
        name={Candle.name}
        price={Candle.price}
        discount={Candle.discount}
      />
    </NavLink>
  );
});
    return (
      <div>
        <NavigationBar />
        <div className={styles.catalogContainer}>
          <div className={styles.filterContainer}>
            <PriceSlider />
            <CheckboxFilter title={'Categories'} value={categories} />
            <CheckboxFilter title={'Color'} value={colors} />
          </div>
          <div className={styles.flowerContainer}>{CandleLists}</div>
        </div>
        <BottomBanner />
      </div>
    );
  };

export default Candle;
