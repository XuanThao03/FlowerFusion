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
import { IMG_Vase1, IMG_Vase2 } from "../../assets/images";
import '@splidejs/splide/dist/css/splide.min.css';
import ItemFlower from "../../components/itemFlower/ItemFlower";
import { NavLink, Link } from "react-router-dom";
import axios from 'axios';
import Banner from "../../components/banner/banner";
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

  useEffect(() => {
    const storedVase = localStorage.getItem('selectedVase');
    if (storedVase) {
      const parsedVase = JSON.parse(storedVase);
      dispatch(setSelectedVase(parsedVase));
      setLink(parsedVase.imgPath1);
    }
  }, [dispatch]);


  const [imgLink, setLink] = useState(imgPath1);
  const handleAddToCart = () => {
    const item = { imgPath: imgPath1, price: formattedTotalPrice, name, quantity };
    dispatch(addToCart(item));
  };
  const lists = [
      { productName: 'Ceramic Vase', productPrice: '120.000' },
      { productName: 'Ceramic Vase', productPrice: '120.000' },
      { productName: 'Ceramic Vase', productPrice: '120.000' },
    ];
  const [quantity, setQuantity] = useState(1);
  const basePrice = parseInt(price ? price.replace(/\./g, '') : '0');
  const [totalPrice, setTotalPrice] = useState(basePrice);

  useEffect(() => {
    setTotalPrice(quantity * basePrice);
  }, [quantity, basePrice]);

  const formattedTotalPrice = totalPrice ? totalPrice.toLocaleString('vi-VN') : '0';

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
                  // to={`/vases/detail/${vase.key}`}
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

return ( 
    <div>
        <div>
            <NavigationBar />
        </div>
        <div className="flex">
            <div className="flex flex-col space-y-2 ml-11 mr-6 min-h-screen justify-end" style={{ flex: '0.6' }}>
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
              </button><button onClick={() => setLink(imgPath3)}>
                <img
                  src={imgPath3}
                  alt="Image 3"
                  className="w-20 h-28 object-cover"
                />
              </button>
            </div>
            <div style={{ flex: '4.6' }}>
                <img src={imgLink} alt="VASE" className="w-full h-full object-cover" />
            </div>
            <div style={{ flex: '4.8' }}>
            <h1 className="text-3xl font-Lexend text-main-color ml-10 mt-12">{name}</h1>
                <p className="text-xs font-Lexend font-medium font-semibold text-main-color ml-10 mt-6">Quantity</p>
                <div className="mt-3.5 ml-10 mr-16">
                  <Quantity quantity={quantity}
                                onIncrement={() => setQuantity(quantity + 1)}
                                onDecrement={() => setQuantity(quantity - 1)}/>
                </div>
                <h1 className="text-lg font-Lexend font-medium font-semibold text-main-color ml-10 mt-11">Add a matching floral (optional)</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-3.5 ml-10 mr-16">
                  {lists.map((option) => (
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
