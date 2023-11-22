import React, { useState } from "react";
import styles from "./detailflower.module.scss";
import FlowerCart from "../../components/flowercart/flowercart";
import PayMent from "../../components/payment/payment";
import DoubleInput from "../../components/doubleinput/doubleinput";
import TextInput from "../../components/textinput/textinput";
import ACBImage from '../../assets/images/acb.png';
import MomoImage from '../../assets/images/momo.png';
import ZaloPayImage from '../../assets/images/zalopay.png';
const DetailFlower = () => {
    return ( 
        <PayMent />
    );

};

export default DetailFlower;
