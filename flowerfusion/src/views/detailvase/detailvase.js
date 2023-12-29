import React, { Component, useState, useEffect } from "react";
import styles from "./detailvase.module.scss";
import { NavigationBar } from "../../components/navigationBar/NavigationBar";
import ListBag from "../../components/listbag/listbag";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Quantity from "../../components/quantity/quantity";
import AddToBag from "../../components/addtobag/addtobag";
import Description from "../../components/description/description";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/Actions/cartAction';
import '@splidejs/splide/dist/css/splide.min.css';
import ItemFlower from "../../components/itemFlower/ItemFlower";
import { NavLink, Link } from "react-router-dom";
import axios from 'axios';
import Banner from "../../components/banner/banner";
import {setFlowers, setSelectedFlower} from '../../Redux/Actions/flowerAction';
import { setVases, setSelectedVase } from '../../Redux/Actions/vaseAction';
const DetailVase = () => {
  const dispatch = useDispatch();
  const selectedVase = useSelector((state) => state.selectedVase);
  const {
    name,
    imgPath1,
    imgPath2,
    imgPath3,
    price,
    description,
  } = selectedVase || {};
  const imgList = [imgPath1, imgPath2, imgPath3];
  const creatDetailImg = imgList.map(img => {
    return (
      <button onClick={() => setLink(img)}>
        <img src={img} alt="Img detail" className="w-24 h-32 object-cover" />
      </button>
    );
  });
  useEffect(() => {
    const storedVase = localStorage.getItem('selectedVase');
    if (storedVase) {
      const parsedVase = JSON.parse(storedVase);
      dispatch(setSelectedVase(parsedVase));
      setLink(parsedVase.imgPath1);
    }
  }, [dispatch]);
  const [imgLink, setLink] = useState(imgPath1);
  const vases = useSelector((state) => state.vases);
  const handleVaseClick = (selectedVase) => {
    dispatch(setSelectedVase(selectedVase));
    localStorage.setItem('selectedVase', JSON.stringify(selectedVase));
    setLink(selectedVase.imgPath1);
    window.location = `/vases/detail/${selectedVase.key}`;
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
        <NavLink  className="flex justify-center" 
                  onClick={() => handleVaseClick(vase)}>
          <ItemFlower
            className={styles.itemFlower}
            img={vase.imgPath1}
            name={vase.name}
            price={vase.price}
            discount={vase.discount}
          />
        </NavLink>
      </SplideSlide>
    );
  });
  const [quantity, setQuantity] = useState(1);
  const basePrice = parseInt(price ? price.replace(/\./g, '') : '0');
  const [totalPrice, setTotalPrice] = useState(basePrice);
  useEffect(() => {
    setTotalPrice(quantity * basePrice);
  }, [quantity, basePrice]);
  const formattedTotalPrice = totalPrice ? totalPrice.toLocaleString('vi-VN') : '0';
  const flowers = useSelector(state => state.flowers);
  const selectedFlower = useSelector(state => state.selectedFlower);
  const handleFlowerClick = selectedFlower => {
    const previousSelectedFlower = JSON.parse(localStorage.getItem('selectedFlower'));
    if (previousSelectedFlower && previousSelectedFlower.key === selectedFlower.key) {
      dispatch(setSelectedFlower(null));
      localStorage.removeItem('selectedFlower');
    } else {
      dispatch(setSelectedFlower(selectedFlower));
      localStorage.setItem('selectedFlower', JSON.stringify(selectedFlower));
    }
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
  useEffect(() => {
    dispatch(setSelectedFlower(null));
    localStorage.removeItem('selectedFlower');
  }, [dispatch]); 
  const flowerLists = flowers.map(fl => {
    const isSelected = selectedFlower && selectedFlower.key === fl.key;
    return (
      <SplideSlide key={fl.key}>
        <NavLink className={`flex justify-center ${isSelected ? styles.selectedStyle : ''}`}
                 onClick={() => handleFlowerClick(fl)}>
          <ListBag
            className={styles.itemFlower}
            img={fl.imgPath1}
            name={fl.name}
            price={fl.price1}
          />
        </NavLink>
      </SplideSlide>
    );
  });
  const handleAddToCart = () => {
    const item = { imgPath: imgPath1, price: formattedTotalPrice, name, quantity };
    dispatch(addToCart(item));
    if (selectedFlower) {
      const flowerItem = {
        imgPath: selectedFlower.imgPath1,
        price: selectedFlower.price1,
        name: selectedFlower.name,
        quantity: 1,
        type: 'flower',
      };
      dispatch(addToCart(flowerItem));
    }
  };
  return ( 
    <div>
        <div>
            <NavigationBar />
        </div>
        <div className="flex">
          <div className="flex">
            <div className="flex flex-col space-y-2 min-h-screen justify-end w-1/6 items-center">
              {creatDetailImg}
            </div>
            <div className="w-5/6">
              <img
                src={imgLink}
                alt="VASE"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-1/2 ml-5 mt-12">
            <h1 className="text-3xl font-Lexend text-main-color">{name}</h1>
            <p className="text-xs font-Lexend  font-semibold text-main-color  mt-6">
              Quantity
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-3.5  mr-16">
                <Quantity quantity={quantity}
                          onIncrement={() => setQuantity(quantity + 1)}
                          onDecrement={() => setQuantity(quantity - 1)}/>
            </div>
            <h1 className="text-lg font-Lexend  font-semibold text-main-color  mt-11">
                Add a matching floral (optional)
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
                {flowerLists}
              </Splide>
            </div>
            <div className="mt-8  mr-16">
              <AddToBag totalPrice={totalPrice} onAddToCart={handleAddToCart} />
            </div>
        </div>
        </div>
        <div className="mt-20 ">
            <Description placeholder={description} />
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
          {vaseLists}
        </Splide>
    </div>
  );
};

export default DetailVase;
