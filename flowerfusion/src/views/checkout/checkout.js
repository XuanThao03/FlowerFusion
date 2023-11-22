import React, { useState } from "react";
import styles from "./checkout.module.scss";
import FlowerCart from "../../components/flowercart/flowercart";
import PayMent from "../../components/payment/payment";
import DoubleInput from "../../components/doubleinput/doubleinput";
import TextInput from "../../components/textinput/textinput";
import ACBImage from '../../assets/images/acb.png';
import MomoImage from '../../assets/images/momo.png';
import ZaloPayImage from '../../assets/images/zalopay.png';
const CheckOut = () => {
    return ( 
    <div className="flex flex-row min-h-screen">
      <div className="flex-1">
        {<div className=" align-middle flex flex-col items-center">
            <h1 className="text-sm font-lexend font-medium text-main-color mt-8 ">Expess Checkout</h1>
            <div className="flex mt-5">
                <img src={ZaloPayImage} alt="ZaloPay" className="h-8 mx-2" />
                <img src={MomoImage} alt="Momo" className="h-8 mx-2" />
                <img src={ACBImage} alt="ACB" className="h-8 mx-2" />
            </div>
            <p className="text-xs font-lexend text-grey-main mt-4">Or</p>
        </div>}
        {<div className=" flex justify-between items-center w-full">
            <h1 className="text-xl font-lexend font-medium text-main-color mt-7 ml-14">Contact</h1>
            <div className="w-full text-right">
            <p className="text-xs font-medium text-main-color mt-7 mr-7">
             Have an account? <a href="/login" className="underline">Log in</a>
             </p>
            </div>
        </div>}
        <TextInput placeholder="Email or Mobile phone number"/>
        <div className="flex items-center ml-16 mt-2">
        <input
            type="checkbox"
            id="new-offers"
            name="new-offers"
            className="form-checkbox h-5 w-5 accent-main-color" 
        />
        <label htmlFor="new-offers" className="text-xs font-lexend text-main-color ml-2">Email me with new offers</label>
        </div>
        <h1 className="text-xl font-lexend font-medium text-main-color mt-6 ml-14">Delivery</h1>
        <TextInput placeholder="Country / Region"/>
        <DoubleInput placeholder1="First name (Optional)" placeholder2="Last name"/>
        <TextInput placeholder="Company (Optional)"/>
        <TextInput placeholder="Address"/>
        <DoubleInput placeholder1="Postal Code" placeholder2="City"/>
        <TextInput placeholder="Phone"/>
        <div className="flex items-center ml-16 mt-2">
        <input
            type="checkbox"
            id="special-offers"
            name="special-offers"
            className="form-checkbox h-5 w-5 accent-main-color" 
        />
        <label htmlFor="new-offers" className="text-xs font-lexend text-main-color ml-2">Send me a special offers through text</label>
        </div>
        <h1 className="text-xl font-lexend font-medium text-main-color mt-6 ml-14">Payment</h1>
          <PayMent />
        <div className="ml-16 mt-8" >
                <button className="bg-button-black w-[650px] h-10 rounded-[10px] text-white text-xs font-semibold" >Pay now</button>
        </div>
      </div>
      <div className="flex-1">
          <FlowerCart />
          <FlowerCart />
        {<div className=" flex justify-between items-center w-full">
            <input
                className="w-[500px] border-[1px] boder-gainsboro rounded-md h-11 p-4 ml-16 mt-9 bg-transparent"
                placeholder="Discount code or Gift card"/>
            <div className="mt-9 mr-14" >
                <button className="bg-button-black w-24 h-10 rounded-[10px] text-white text-xs font-semibold" >Apply</button>
            </div>
        </div>}
        <div className="flex justify-between items-center px-4 py-2 mt-11 ml-12">
            <div>
                <p className="text-xl text-total-price">Subtotal</p>
                <p className="text-xl text-total-price mt-2">Shipping</p>
                <p className="text-xl text-total-price mt-2">Total</p>
            </div>
            <div className="flex flex-col items-end space-y-2 p-4 mr-9">
                <p className="text-xl font-bold text-pine-tree">120.000</p>
                <p className="text-xl font-bold text-pine-tree">40.000</p>
                <p className="text-xl font-bold text-red-price">160.000</p>
            </div>
        </div>
      </div>
    </div>
    );

};

export default CheckOut;
