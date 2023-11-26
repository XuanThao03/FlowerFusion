import React, { Component, useState } from "react";
import styles from "./detailvase.module.scss";
import { NavigationBar } from "../../components/navigationBar/NavigationBar";
import ListBag from "../../components/listbag/listbag";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Quantity from "../../components/quantity/quantity";
import AddToBag from "../../components/addtobag/addtobag";
import Description from "../../components/description/description";
import VaseImage from '../../assets/images/IMG_vase1.png';
import { IMG_Vase1, IMG_Vase2 } from "../../assets/images";
import '@splidejs/splide/dist/css/splide.min.css';
import ItemFlower from "../../components/itemFlower/ItemFlower";
import { NavLink, Link } from "react-router-dom";
import Banner from "../../components/banner/banner";
const DetailVase = () => {
  const options = [
    { pieces: '12 pieces', price: '240.000' },
    { pieces: '24 pieces', price: '450.000' },
    { pieces: '36 pieces', price: '600.000' },
  ];
const lists = [
    { productName: 'Ceramic Vase', productPrice: '120.000' },
    { productName: 'Ceramic Vase', productPrice: '120.000' },
    { productName: 'Ceramic Vase', productPrice: '120.000' },
  ];
  const flowers = [
    {
      img: IMG_Vase1,
      name: "Joyful Wishes",
      price: "240.000",
      discount: "10%",
    },
    {
      img: IMG_Vase1,
      name: "Joyful Wishes",
      price: "240.000",
      discount: "10%",
    },
    {
      img: IMG_Vase2,
      name: "Joyful Wishes",
      price: "240.000",
      discount: "10%",
    },
    {
      img: IMG_Vase2,
      name: "Joyful Wishes",
      price: "240.000",
      discount: "10%",
    },
  ];
  const flowerLists = flowers.map((fl) => {
    return (
      <NavLink className="flex justify-center" to="/flowers/detail" exact={true}>
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
            <div className="flex flex-col space-y-2 ml-11 mr-6 min-h-screen justify-end" style={{ flex: '0.6' }}>
              <img src={VaseImage} alt="Image 1" className="w-20 h-28 object-cover" />
              <img src={VaseImage} alt="Image 2" className="w-20 h-28 object-cover" />
              <img src={VaseImage} alt="Image 3" className="w-20 h-28 object-cover" />
            </div>
            <div style={{ flex: '4.6' }}>
                <img src={VaseImage} alt="FLOWER" className="w-full h-full object-cover" />
            </div>
            <div style={{ flex: '4.8' }}>
            <h1 className="text-3xl font-Lexend text-main-color ml-10 mt-12">ARIA GLASS VASE - MAPPLE BLACK</h1>
                <p className="text-xs font-Lexend font-medium font-semibold text-main-color ml-10 mt-6">Quantity</p>
                <div className="mt-3.5 ml-10 mr-16">
                    <Quantity/>
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
                    <AddToBag/>
                </div>
            </div>
        </div>
        <div className="mt-20 ">
            <Description placeholder="This vase is perfect for our 60cm faux pampas. The perfect statement vase.
                                        This vase is made with Glass and is 25cm tall, 11cm wide."/>
        </div>
        <div>
            <h2 className="mt-16 text-xl font-Lexend ml-11">YOU MIGHT ALSO LIKE</h2>
        </div>
        <div className="w-full grid grid-cols-4 justify-center items-stretch">{flowerLists}</div>
    </div>
  );
};

export default DetailVase;
