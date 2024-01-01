import React from "react";
import styles from "./flowercart.module.scss";
import FlowerImage from '../../assets/images/IMG_Flower1.png';
const FlowerCart = ({ item }) => {
    return (
        <div className="flex items-center space-x-4 p-4 bg-white shadow rounded-lg ml-12 mt-8">
        <div className="flex-shrink-0">
            <img src={item.imgPath} alt="FLOWER" className="w-20 h-20 object-cover rounded-lg" />
        </div>
        <div className="flex flex-col flex-grow">
            <span className="text-lg font-semibold">{item.name}</span>
            <span className="text-sm text-gray-500">{item.quantity} items</span>
        </div>
        <div className="flex-shrink-0">
            <span className="text-lg font-semibold text-red-price mr-14">{item.price}</span>
        </div>
    </div>
    );
  };
  export default FlowerCart;