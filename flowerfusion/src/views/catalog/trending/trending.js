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
import {useDispatch} from 'react-redux';
import {setSelectedFlower} from '../../../Redux/Actions/flowerAction';
import {setSelectedVase} from '../../../Redux/Actions/vaseAction';
import {Search} from '../../../components/searchbar/search';

const arrival = [
  {name: 'Letter box friendly', quantity: 55},
  {name: 'Comes pre-arranged', quantity: 65},
];
const categories = [
  {name: 'Flower', quantity: 46},
  {name: 'Candle', quantity: 47},
  {name: 'Candlestick', quantity: 40},
  {name: 'Vase', quantity: 40},
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
// const typeLists = typeProducts.map((type) => {
//   return (
//     <SplideSlide className={styles.btnTab}>
//       <BtnTab text={type} />
//     </SplideSlide>
//   );
// });
const Trending = () => {
  const [keywords, setKeywords] = useState('');

  const dispatch = useDispatch();
  const [trendings, setTrendings] = useState([]);
  const handleTrendingClick = selectedTrending => {
    if (selectedTrending.type === 'flower') {
      dispatch(setSelectedFlower(selectedTrending));
      localStorage.setItem('selectedFlower', JSON.stringify(selectedTrending));
    } else {
      dispatch(setSelectedFlower(setSelectedVase));
      localStorage.setItem('selectedVase', JSON.stringify(selectedTrending));
    }
  };

  useEffect(() => {
    const fetchtrending = async () => {
      try {
        await axios.get('/api/trendings').then(res => {
          console.log(res);
          setTrendings(res.data);
        });
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchtrending();
  }, []);
  const flowerLists = trendings.map(trending => {
    console.log('trending', trending.type);
    if (trending.type === 'flower') {
      return (
        <NavLink
          className="flex justify-center"
          to={`/flowers/detail/${trending.key}`}
          exact={true}
          onClick={() => handleTrendingClick(trending)}
          key={trending.key}>
          <ItemFlower
            className={styles.itemFlower}
            img={trending.imgPath1}
            name={trending.name}
            price={trending.price1}
            discount={trending.discount}
          />
        </NavLink>
      );
    } else {
      return (
        <NavLink
          className="flex justify-center"
          to={`/vases/detail/${trending.key}`}
          exact={true}
          onClick={() => handleTrendingClick(trending)}
          key={trending.key}>
          <ItemFlower
            className={styles.itemFlower}
            img={trending.imgPath1}
            name={trending.name}
            price={trending.price1}
            discount={trending.discount}
          />
        </NavLink>
      );
    }
  });

  return (
    <NavLink className="flex justify-center" 
    //to="/flowers/detail" 
    exact={true}>
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
        <NavigationBar placeholder="All of trendings"/>
        {/* <div>
    <div>
      {/* <Header /> */}
      <NavigationBar />
      {/* <div>
          <ul className="md:flex overflow-scroll no-scrollbar ">{typeLists}</ul>
        </div> */}
      {/* <div>
          <div>
            <Splide
              hasTrack={false}
              options={{
                type: "loop",
                gap: "0.5em",
                perPage: 5,
                focus: "center",
                pagination: false,
              }}
              aria-label="Movies On Show"
            >
              <SplideTrack className=" first:ml-10">{typeLists}</SplideTrack>
            </Splide>
          </div>
        </div> */}
      <div className={styles.catalogContainer}>
        <div className={styles.filterContainer}>
          <Search onChange={e => setKeywords(e.target.value)} />

          <PriceSlider />
          <CheckboxFilter title={'Categories'} value={categories} />
        </div>
        <div className={styles.flowerContainer}>{flowerLists}</div>
      </div>
      <BottomBanner />
    </div>
  );
};

export default Trending;
