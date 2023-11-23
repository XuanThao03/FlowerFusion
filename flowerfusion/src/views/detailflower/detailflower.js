import React, { useState } from "react";
import styles from "./detailflower.module.scss";
import { NavigationBar } from "../../components/naviagtionBar/NavigationBar";
import Size from "../../components/size/size";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import ACBImage from '../../assets/images/acb.png';
import MomoImage from '../../assets/images/momo.png';
import ZaloPayImage from '../../assets/images/zalopay.png';
import ListBag from "../../components/listbag/listbag";
import AddToBag from "../../components/addtobag/addtobag";
import '@splidejs/splide/dist/css/splide.min.css';
const DetailFlower = () => {
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
    const flowerLists = lists.map((type) => {
        return (
          <SplideSlide>
                <ListBag className="flex-shrink-0" productName={type.productName} productPrice={type.productPrice} />
          </SplideSlide>
        );
      });
    return ( 
        <div>
            <div>
                <NavigationBar />
            </div>
        
            <div className="flex flex-row min-h-screen">
                <div className="flex-1 w-7/10">
                    
                </div>
                <div className="flex-1 w-3/10">
                    <h1 className="text-3xl font-lexend text-main-color ml-10 mt-12">FAUX KIKU FLOWER</h1>
                    <p className="text-xs font-lexend font-medium font-semibold text-main-color ml-10 mt-6">Pick a size</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-3.5 ml-10 mr-16">
                        {options.map((option) => (
                        <Size pieces={option.pieces} price={option.price} />
                        ))}
                    </div>
                    <h1 className="text-lg font-lexend font-medium font-semibold text-main-color ml-10 mt-11">Choose a vase (vase shown is not include)</h1>         
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-3.5 ml-10 mr-16">
                        {lists.map((option) => (
                        <ListBag productName={option.productName} productPrice={option.productPrice} />
                        ))}
                    </div>
                    <div className="mt-8 ml-10 mr-16">
                        <AddToBag/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailFlower;
