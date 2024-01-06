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
import {setVases, setSelectedVase} from '../../../Redux/Actions/vaseAction';
import {Search} from '../../../components/searchbar/search';

const categories = [
  {name: 'Mason Jar', quantity: 46},
  {name: 'Bud Vase', quantity: 47},
  {name: 'Cylinder Vase', quantity: 40},
  {name: 'Ceramic Vase', quantity: 55},
  {name: 'Cube Vase', quantity: 57},
  {name: 'Mason Jar', quantity: 46},
  {name: 'Bud Vase', quantity: 47},
  {name: 'Cylinder Vase', quantity: 40},
  {name: 'Ceramic Vase', quantity: 55},
  {name: 'Cube Vase', quantity: 57},
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
const Vase = () => {
  const [keywords, setKeywords] = useState('');

  const dispatch = useDispatch();
  const vases = useSelector(state => state.vases);

  const handleVaseClick = selectedVase => {
    dispatch(setSelectedVase(selectedVase));
    localStorage.setItem('selectedVase', JSON.stringify(selectedVase));
  };

  useEffect(() => {
    const fetchvases = async () => {
      try {
        const response = await axios.get('/api/vases');
        dispatch(setVases(response.data));
      } catch (error) {
        //console.log(error.response.data.message);
        console.log(error);
      }
    };
    fetchvases();
  }, [dispatch]);
  const vaseLists = vases.map(vase => {
    return (
      <div>
        <NavigationBar placeholder="All of vases"/>
        <div className={styles.catalogContainer}>
          <div className={styles.filterContainer}>
            <PriceSlider />
            <CheckboxFilter title={'Categories'} value={categories} />
            <CheckboxFilter title={'Color'} value={colors} />
          </div>
          <div className={styles.flowerContainer}>{vaseLists}</div>
      <Link
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
      </Link>
    );
  });
  return (
    <div>
      <NavigationBar />
      <div className={styles.catalogContainer}>
        <div className={styles.filterContainer}>
          <Search onChange={e => setKeywords(e.target.value)} />

          <PriceSlider />
          <CheckboxFilter title={'Categories'} value={categories} />
          <CheckboxFilter title={'Color'} value={colors} />
        </div>
        <div className={styles.flowerContainer}>{vaseLists}</div>
      </div>
      <BottomBanner />
    </div>
  );
};

export default Vase;
