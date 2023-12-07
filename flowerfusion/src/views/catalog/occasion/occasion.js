import React, {Component, useState} from 'react';
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
const occasions = [
  {
    img: IMG_Occasion2,
    name: 'Joyful Wishes',
    price: '240.000',
    discount: '10%',
  },
  {
    img: IMG_Occasion1,
    name: 'Joyful Wishes',
    price: '240.000',
    discount: '10%',
  },
  {
    img: IMG_Occasion2,
    name: 'Happy Wishes',
    price: '340.000',
    discount: '10%',
  },
  {
    img: IMG_Occasion1,
    name: 'Joyful Wishes',
    price: '240.000',
    discount: '10%',
  },
  {
    img: IMG_Occasion1,
    name: 'Joyful Wishes',
    price: '240.000',
    discount: '10%',
  },
  {
    img: IMG_Occasion2,
    name: 'Joyful Wishes',
    price: '340.000',
    discount: '10%',
  },
  {
    img: IMG_Occasion1,
    name: 'Joyful Wishes',
    price: '240.000',
    discount: '10%',
  },
  {
    img: IMG_Occasion2,
    name: 'Joyful Wishes',
    price: '240.000',
    discount: '10%',
  },
  {
    img: IMG_Occasion1,
    name: 'Joyful Wishes',
    price: '440.000',
    discount: '10%',
  },
  {
    img: IMG_Occasion2,
    name: 'Joyful Wishes',
    price: '240.000',
    discount: '10%',
  },
  {
    img: IMG_Occasion1,
    name: 'Joyful Wishes',
    price: '240.000',
    discount: '10%',
  },
  {
    img: IMG_Occasion2,
    name: 'Joyful Wishes',
    price: '240.000',
    discount: '10%',
  },
];
const categories = [
  {name: 'Birthday', quantity: 46},
  {name: 'Wedding', quantity: 47},
  {name: 'Christmas', quantity: 40},
  {name: 'Christmas', quantity: 40},
  {name: 'Aniversary', quantity: 55},
  {name: 'Graduation', quantity: 57},
];

const occasionLists = occasions.map(Occasion => {
  return (
    <Link className="flex justify-center" to="/occasion/detail" exact={true}>
      <ItemFlower
        className={styles.itemFlower}
        img={Occasion.img}
        name={Occasion.name}
        price={Occasion.price}
        discount={Occasion.discount}
      />
    </Link>
  );
});
export class Occasion extends Component {
  constructor(props) {
    super(props);
    this.state = {n: 3};
  }
  render() {
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
  }
}

export default Occasion;
