import React from "react";
import styles from "./flowercart.module.scss";
import FlowerImage from '../../assets/images/IMG_Flower1.png';
const FlowerCart = () => {
    return (
        <div className="flex items-center space-x-4 p-4 bg-white shadow rounded-lg ml-12 mt-8">
        {/* Image Container */}
        <div className="flex-shrink-0">
            <img src={FlowerImage} alt="FLOWER" className="w-20 h-20 object-cover rounded-lg" />
        </div>
        {/* Description */}
        <div className="flex flex-col flex-grow">
            <span className="text-lg font-semibold">FAUX KIKU FLOWER - CREAM</span>
            <span className="text-sm text-gray-500">5 items</span>
        </div>
        {/* Price */}
        <div className="flex-shrink-0">
            <span className="text-lg font-semibold text-red-price mr-14">240.000</span>
        </div>
    </div>
    );
  };
  export default FlowerCart;