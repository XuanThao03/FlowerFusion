import React, {Component, useState, useEffect} from 'react';
import styles from './detailflower.module.scss';
import {NavigationBar} from '../../components/navigationBar/NavigationBar';
import Size from '../../components/size/size';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ListBag from '../../components/listbag/listbag';
import AddToBag from '../../components/addtobag/addtobag';
import Description from '../../components/description/description';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/Actions/cartAction';
import '@splidejs/splide/dist/css/splide.min.css';
import { useParams} from 'react-router-dom'; 
import {NavLink, Link} from 'react-router-dom';
import axios from 'axios';
import Banner from '../../components/banner/banner';
import ItemFlower from '../../components/itemFlower/ItemFlower';
import { setFlowers, setSelectedFlower } from '../../Redux/Actions/flowerAction';
import { setVases, setSelectedVase } from '../../Redux/Actions/vaseAction';

const DetailFlower = () => {
  const dispatch = useDispatch();

  const { key } = useParams();
  const selectedFlower = useSelector((state) => state.selectedFlower);
  const {
    name,
    imgPath1,
    imgPath2,
    imgPath3,
    price1,
    price2,
    price3,
    description,
  } = selectedFlower || {};

  useEffect(() => {
    const storedFlower = localStorage.getItem('selectedFlower');
    if (storedFlower) {
      const parsedFlower = JSON.parse(storedFlower);
      dispatch(setSelectedFlower(parsedFlower));
      setLink(parsedFlower.imgPath1);
      setTotalPrice(parsedFlower.price1);
    }
  }, [dispatch]);
  
  const [imgLink, setLink] = useState(imgPath1);

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

  const flowers = useSelector((state) => state.flowers);
  const handleFlowerClick = (selectedFlower) => {
    dispatch(setSelectedFlower(selectedFlower));
    localStorage.setItem('selectedFlower', JSON.stringify(selectedFlower));
    setLink(selectedFlower.imgPath1);
    setTotalPrice(selectedFlower.price1);
    window.location = `/flowers/detail/${selectedFlower.key}`;
  };
  useEffect(() => {
    const fetchflowers = async () => {
      try {
        const response = await axios.get('/api/flowers');
        dispatch(setFlowers(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchflowers();
  }, [dispatch]);
  const flowerLists = flowers.map(fl => {
    return (
      <SplideSlide key={fl.key}>
        <NavLink
        className="flex justify-center" 
        //to={`/flowers/detail/${fl.key}`}
        onClick={() => handleFlowerClick(fl)}
        >
          <ItemFlower
            className={styles.itemFlower}
            img={fl.imgPath1}
            name={fl.name}
            price={fl.price1}
            discount={fl.discount}
          />
        </NavLink>
      </SplideSlide>
    );
  });
  const [totalPrice, setTotalPrice] = useState(price1); 
  const handleSizeClick = (price) => {
    setTotalPrice(price); 
  };

  const vases = useSelector((state) => state.vases);
  const handleVaseClick = (selectedVase) => {
    dispatch(setSelectedVase(selectedVase));
    localStorage.setItem('selectedVase', JSON.stringify(selectedVase));
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
  const vaseLists = vases.map(vase => {
    return (
      <SplideSlide key={vase.key}>
        <NavLink
        className="flex justify-center" 
        >
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
  
          <div className="mt-3.5 ml-10 mr-16">
              {/* <Splide
                options={{
                  perPage: 3,
                  arrows: true,
                  pagination: false,
                  drag: 'free',
                  gap: '1rem',
                }}
              >
                {vaseLists}
              </Splide>  */}
              <h1>AAAAAAAAAAAAAAAAAAAAAAA</h1>
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

      <Splide className="mt-8"
        options={{
          perPage: 4,
          arrows: true,
          pagination: false,
          drag: 'free',
          gap: '1rem',
        }}
      >
        {flowerLists}
      </Splide>

    </div>
  );
};

export default DetailFlower;
