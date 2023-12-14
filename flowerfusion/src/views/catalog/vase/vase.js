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
const vases = [
  {
    img: IMG_Vase2,
    name: 'Joyful Wishes',
    price: '240.000',
    discount: '10%',
  },
  {
    img: IMG_Vase1,
    name: 'Joyful Wishes',
    price: '240.000',
    discount: '10%',
  },
  {img: IMG_Vase2, name: 'Happy Wishes', price: '340.000', discount: '10%'},
  {
    img: IMG_Vase1,
    name: 'Joyful Wishes',
    price: '240.000',
    discount: '10%',
  },
  {
    img: IMG_Vase1,
    name: 'Joyful Wishes',
    price: '240.000',
    discount: '10%',
  },
  {
    img: IMG_Vase2,
    name: 'Joyful Wishes',
    price: '340.000',
    discount: '10%',
  },
  {
    img: IMG_Vase1,
    name: 'Joyful Wishes',
    price: '240.000',
    discount: '10%',
  },
  {
    img: IMG_Vase2,
    name: 'Joyful Wishes',
    price: '240.000',
    discount: '10%',
  },
  {
    img: IMG_Vase1,
    name: 'Joyful Wishes',
    price: '440.000',
    discount: '10%',
  },
  {
    img: IMG_Vase2,
    name: 'Joyful Wishes',
    price: '240.000',
    discount: '10%',
  },
  {
    img: IMG_Vase1,
    name: 'Joyful Wishes',
    price: '240.000',
    discount: '10%',
  },
  {
    img: IMG_Vase2,
    name: 'Joyful Wishes',
    price: '240.000',
    discount: '10%',
  },
];
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
  const [vases, setVases] = useState([]);
  useEffect(() => {
    const fetchvases = async () => {
      try {
        await axios.get('/api/vases').then(res => {
          console.log(res);
          setVases(res.data);
        });
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchvases();
  }, []);
const vaseLists = vases.map(vase => {
  return (
    <Link className="flex justify-center" to="/vases/detail" exact={true}>
      <ItemFlower
        className={styles.itemFlower}
        img={vase.imgPath}
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
