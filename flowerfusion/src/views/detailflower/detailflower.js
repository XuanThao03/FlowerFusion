import React, {Component, useState, useEffect} from 'react';
import styles from './detailflower.module.scss';
import {NavigationBar} from '../../components/navigationBar/NavigationBar';
import Size from '../../components/size/size';
import {Splide, SplideSlide, SplideTrack} from '@splidejs/react-splide';
import ListBag from '../../components/listbag/listbag';
import AddToBag from '../../components/addtobag/addtobag';
import Description from '../../components/description/description';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/Actions/cartAction';
import '@splidejs/splide/dist/css/splide.min.css';
import { useParams } from 'react-router-dom'; 
import {NavLink, Link} from 'react-router-dom';
import Banner from '../../components/banner/banner';
import ItemFlower from '../../components/itemFlower/ItemFlower';
import {
  IMG_Flower13x,
  IMG_Flower2,
  IMG_Flower3,
  IMG_Kiku1,
  IMG_Kiku2,
  IMG_Kiku3,
} from '../../assets/images';

const DetailFlower = () => {


  const selectedFlower = useSelector((state) => state.selectedFlower);
  const { name, imgPath1, imgPath2, imgPath3, price1, price2, price3, description } = selectedFlower || {};

  const [imgLink, setLink] = useState(imgPath1);

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const item = { imgPath: imgPath1,
                   price: totalPrice, 
                   name, 
                   quantity: 1, 
                   type: 'flower' };
    dispatch(addToCart(item));
  };

  const options = [
    {pieces: '12 pieces', price: price1 },
    {pieces: '24 pieces', price: price2 },
    {pieces: '36 pieces', price: price3 },
  ];
  const lists = [
    {productName: 'Ceramic Vase', productPrice: '120.000'},
    {productName: 'Ceramic Vase', productPrice: '120.000'},
    {productName: 'Ceramic Vase', productPrice: '120.000'},
  ];
  const flowers = [
    {
      img: IMG_Flower2,
      name: 'Joyful Wishes',
      price: '240.000',
      discount: '10%',
    },
    {
      img: IMG_Flower2,
      name: 'Joyful Wishes',
      price: '240.000',
      discount: '10%',
    },
    {
      img: IMG_Flower3,
      name: 'Joyful Wishes',
      price: '240.000',
      discount: '10%',
    },
    {
      img: IMG_Flower3,
      name: 'Joyful Wishes',
      price: '240.000',
      discount: '10%',
    },
  ];
  const [totalPrice, setTotalPrice] = useState(price1); 
  
  const handleSizeClick = (price) => {
    setTotalPrice(price); 
  };

  const flowerLists = flowers.map(fl => {
    return (
      <NavLink
        className="flex justify-center"
        to="/flowers/detail"
        exact={true}>
        <ItemFlower
          className="flex-shrink-0  justify-center flex"
          img={fl.img}
          name={fl.name}
          price={fl.price}
          discount={fl.discount}
        />
      </NavLink>
    );
  });
  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div className="flex">
        <div
          className="flex flex-col space-y-2 ml-11 mr-6 min-h-screen justify-end"
          style={{flex: '0.6'}}>
          <button onClick={() => setLink(imgPath1)}>
            <img
              src={imgPath1}
              alt="Image 1"
              className="w-20 h-28 object-cover"
            />
          </button>

          <button onClick={() => setLink(imgPath2)}>
            <img
              src={imgPath2}
              alt="Image 2"
              className="w-20 h-28 object-cover"
            />
          </button>

          <button onClick={() => setLink(imgPath3)}>
            <img
              src={imgPath3}
              alt="Image 3"
              className="w-20 h-28 object-cover"
            />
          </button>
        </div>
        <div style={{flex: '4.6'}}>
          <img
            src={imgLink}
            alt="FLOWER"
            className="w-full h-full object-cover"
          />
        </div>
        <div style={{flex: '4.8'}}>
          <h1 className="text-3xl font-Lexend text-main-color ml-10 mt-12">
            {name}
          </h1>
          <p className="text-xs font-Lexend font-medium font-semibold text-main-color ml-10 mt-6">
            Pick a size
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-3.5 ml-10 mr-16">
            {options.map(option => (
              <Size 
              pieces={option.pieces} 
              price={option.price}
              onClick={handleSizeClick} />
            ))}
          </div>
          <h1 className="text-lg font-Lexend font-medium font-semibold text-main-color ml-10 mt-11">
            Choose a vase (vase shown is not include)
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-3.5 ml-10 mr-16">
            {lists.map(option => (
              <ListBag
                productName={option.productName}
                productPrice={option.productPrice}
              />
            ))}
          </div>
          <div className="mt-8 ml-10 mr-16">
            <AddToBag totalPrice={totalPrice} onAddToCart={handleAddToCart}/>
          </div>
        </div>
      </div>
      <div className="mt-20 ">
        <Description
          placeholder={
            description
          }
        />
      </div>
      <div>
        <h2 className="mt-16 text-xl font-Lexend ml-11">YOU MIGHT ALSO LIKE</h2>
      </div>

      <div className="w-full grid grid-cols-4 justify-center items-stretch">
        {flowerLists}
      </div>
    </div>
  );
};

export default DetailFlower;
