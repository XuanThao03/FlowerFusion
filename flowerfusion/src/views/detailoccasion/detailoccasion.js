import React, {Component, useState, useEffect} from 'react';
import styles from './detailoccasion.module.scss';
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
import axios from 'axios';
import {NavLink, Link} from 'react-router-dom';
import Banner from '../../components/banner/banner';
import ItemFlower from '../../components/itemFlower/ItemFlower';
import {setVases, setSelectedVase} from '../../Redux/Actions/vaseAction';
import { setOccasions, setSelectedOccasion } from '../../Redux/Actions/occasionAction';
import {
  IMG_Flower13x,
  IMG_Flower2,
  IMG_Flower3,
  IMG_Kiku1,
  IMG_Kiku2,
  IMG_Kiku3,
} from '../../assets/images';

const DetailOccasion = () => {
  const dispatch = useDispatch();
  const selectedOccasion = useSelector((state) => state.selectedOccasion);
  const {
    name,
    imgPath1,
    imgPath2,
    imgPath3,
    price1,
    price2,
    price3,
    description,
  } = selectedOccasion || {};
  const imgList = [imgPath1, imgPath2, imgPath3];
  const creatDetailImg = imgList.map(img => {
    return (
      <button onClick={() => setLink(img)}>
        <img src={img} alt="Img detail" className="w-24 h-32 object-cover" />
      </button>
    );
  });
  useEffect(() => {
    const storedOccasion = localStorage.getItem('selectedOccasion');
    if (storedOccasion) {
      const parsedOccasion = JSON.parse(storedOccasion);
      dispatch(setSelectedOccasion(parsedOccasion));
      setLink(parsedOccasion.imgPath1);
      setTotalPrice(parsedOccasion.price1);
    }
  }, [dispatch]);
  const [imgLink, setLink] = useState(imgPath1);
  const options = [
    {pieces: '12 pieces', price: price1 },
    {pieces: '24 pieces', price: price2 },
    {pieces: '36 pieces', price: price3 },
  ];
  const occasions = useSelector((state) => state.occasions);
  const handleOccasionClick = (selectedOccasion) => {
    dispatch(setSelectedOccasion(selectedOccasion));
    localStorage.setItem('selectedOccasion', JSON.stringify(selectedOccasion));
    setLink(selectedOccasion.imgPath1);
    setTotalPrice(selectedOccasion.price1);
    window.location = `/occasions/detail/${selectedOccasion.key}`;
  };
  useEffect(() => {
    const fetchoccasions = async () => {
      try {
        const response = await axios.get('/api/occasions');
        dispatch(setOccasions(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchoccasions();
  }, [dispatch]);
  const occasionLists = occasions.map(Occasion => {
    return (
      <SplideSlide key={Occasion.key}>
        <NavLink className="flex justify-center" 
              // to={`/occasions/detail/${Occasion.key}`}
              onClick={() => handleOccasionClick(Occasion)}>
          <ItemFlower
            className={styles.itemFlower}
            img={Occasion.imgPath1}
            name={Occasion.name}
            price={Occasion.price1}
            discount={Occasion.discount}
          />
        </NavLink>
      </SplideSlide>
    );
  });
  const [totalPrice, setTotalPrice] = useState(options[0]?.price);
  const [selectedSize, setSelectedSize] = useState(options[0]?.pieces);
  const handleSizeClick = (option) => {
    setSelectedSize(option.pieces);
    setTotalPrice(option.price);
  };
  const vases = useSelector(state => state.vases);
  const selectedVase = useSelector(state => state.selectedVase);
  const handleVaseClick = selectedVase => {
    const previousSelectedVase = JSON.parse(localStorage.getItem('selectedVase'));
    if (previousSelectedVase && previousSelectedVase.key === selectedVase.key) {
      dispatch(setSelectedVase(null));
      localStorage.removeItem('selectedVase');
    } else {
      dispatch(setSelectedVase(selectedVase));
      localStorage.setItem('selectedVase', JSON.stringify(selectedVase));
    }
  };
  useEffect(() => {
    const fetchvases = async () => {
      try {
        const response = await axios.get('/api/vases');
        dispatch(setVases(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchvases();
  }, [dispatch]);
  useEffect(() => {
    dispatch(setSelectedVase(null));
    localStorage.removeItem('selectedVase');
  }, [dispatch]); 
  const vaseLists = vases.map(vase => {
    const isSelected = selectedVase && selectedVase.key === vase.key;
    return (
      <SplideSlide key={vase.key}>
        <NavLink className={`flex justify-center ${isSelected ? styles.selectedStyle : ''}`}
                 onClick={() => handleVaseClick(vase)}>
          <ListBag
            className={styles.itemFlower}
            img={vase.imgPath1}
            name={vase.name}
            price={vase.price}
          />
        </NavLink>
      </SplideSlide>
    );
  });
  const handleAddToCart = () => {
    const item = { imgPath: imgPath1, price: totalPrice, name, quantity: 1, type: 'flower' };
    dispatch(addToCart(item));
    if (selectedVase) {
      const vaseItem = {
        imgPath: selectedVase.imgPath1,
        price: selectedVase.price,
        name: selectedVase.name,
        quantity: 1,
        type: 'vase',
      };
      dispatch(addToCart(vaseItem));
    }
  };
  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div className="flex">
        {/* Image  */}
        <div className="flex">
          <div className="flex flex-col space-y-2 min-h-screen justify-end w-1/6 items-center">
            {creatDetailImg}
          </div>
          <div className="w-5/6">
            <img
              src={imgLink}
              alt="FLOWER"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Detail */}
        <div className="w-1/2 ml-5 mt-12">
          <h1 className="text-3xl font-Lexend text-main-color">{name}</h1>
          <p className="text-xs font-Lexend  font-semibold text-main-color  mt-6">
            Pick a size
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-3.5  mr-16">
            {options.map((option, index) => (
              <Size
                key={index}
                pieces={option.pieces}
                price={option.price}
                //onClick={handleSizeClick}
                onClick={() => handleSizeClick(option)}
              />
            ))}
          </div>
          <h1 className="text-lg font-Lexend  font-semibold text-main-color  mt-11">
            Choose a vase (vase shown is not include)
          </h1>
          <div className=" w-full mt-3.5 mr-16">
            <Splide
              options={{
                perPage: 3,
                arrows: true,
                pagination: false,
                drag: 'free',
                gap: '1rem',
              }}>
              {vaseLists}
            </Splide>
          </div>
          <div className="mt-8  mr-16">
            <AddToBag totalPrice={totalPrice} onAddToCart={handleAddToCart} />
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
      <Splide className="mt-8"
        options={{
          perPage: 4,
          arrows: true,
          pagination: false,
          drag: 'free',
          gap: '1rem',
        }}
      >
        {occasionLists}
      </Splide>
    </div>
  );
};

export default DetailOccasion;
