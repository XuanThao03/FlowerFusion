import React, {Component, useEffect, useState} from 'react';
import {Header} from '../../../components/header/Header';
import {NavigationBar} from '../../../components/navigationBar/NavigationBar';
import {BtnTab} from '../../../components/btnTab/BtnTab';
import styles from '../catalog.module.scss';
import {Splide, SplideSlide, SplideTrack} from '@splidejs/react-splide';
import {
  IMG_Flower1,
  IMG_Occasion1,
  IMG_Occasion2,
} from '../../../assets/images';
import '@splidejs/react-splide/css';
import PriceSlider from '../../../components/filter/price/PriceSlider';
import CheckboxFilter from '../../../components/filter/checkboxFilter/checkboxFilter';
import BottomBanner from '../../../components/banner/bottomBanner';
import {NavLink, Link} from 'react-router-dom';
import ItemFlower from '../../../components/itemFlower/ItemFlower';
import axios from 'axios';

const categories = [
  {name: 'Birthday', quantity: 46},
  {name: 'Wedding', quantity: 47},
  {name: 'Christmas', quantity: 40},
  {name: 'Christmas', quantity: 40},
  {name: 'Aniversary', quantity: 55},
  {name: 'Graduation', quantity: 57},
];
const Occasion = () => {
  const [occasions, setOccasion] = useState([]);
  useEffect(() => {
    const fetchoccasion = async () => {
      try {
        await axios.get('/api/occasions').then(res => {
          console.log(res);
          setOccasion(res.data);
        });
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchoccasion();
  }, []);
const occasionLists = occasions.map(Occasion => {
  return (
    <Link className="flex justify-center" to="/occasion/detail" exact={true}>
      <ItemFlower
        className={styles.itemFlower}
        img={Occasion.imgPath}
        name={Occasion.name}
        price={Occasion.price}
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
