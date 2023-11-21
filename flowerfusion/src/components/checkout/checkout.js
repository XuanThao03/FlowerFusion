import React, { useState } from "react";
import styles from "./checkout.module.scss";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import FlowerImage from '../../assets/images/IMG_Flower1.png';
import ACBImage from '../../assets/images/acb.png';
import MomoImage from '../../assets/images/momo.png';
import ZaloPayImage from '../../assets/images/zalopay.png';
const CheckOut = () => {
    return ( 
        <SplideSlide>
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
        <div className="text-xs font-normal text-grey-main">
                <input
                className="w-[650px] border-[1px] boder-gainsboro rounded-md h-11 p-4 ml-16 mt-5 bg-transparent"
                placeholder="Email or Mobile phone number"/>
        </div>
        <div className="flex items-center ml-16 mt-2">
        <input
            type="checkbox"
            id="new-offers"
            name="new-offers"
            className="form-checkbox h-5 w-5 text-black" 
        />
        <label htmlFor="new-offers" className="text-xs font-lexend text-main-color ml-2">Email me with new offers</label>
        </div>
        <h1 className="text-xl font-lexend font-medium text-main-color mt-6 ml-14">Delivery</h1>
        <div className="text-xs font-normal text-grey-main">
                <input
                className="w-[650px] border-[1px] boder-gainsboro rounded-md h-11 p-4 ml-16 mt-8 bg-transparent"
                placeholder="Country / Region"/>
        </div>
        <div className="flex w-[650px] ml-16 mt-9 text-xs font-normal text-grey-main">
        {/* First half */}
        <div className="flex-1">
            <input
            className="w-full border-1 border-gainsboro rounded-md h-11 p-4 bg-transparent"
            placeholder="First name (Optional)"
            />
        </div>

        {/* Divider - Nếu bạn muốn có khoảng cách giữa hai input */}
        <div className="w-4"></div> {/* Adjust width as needed for spacing */}

        {/* Second half */}
        <div className="flex-1">
            <input
            className="w-full border-1 border-gainsboro rounded-md h-11 p-4 bg-transparent"
            placeholder="Last name"
            />
        </div>
        </div>
        <div className="text-xs font-normal text-grey-main">
                <input
                className="w-[650px] border-[1px] boder-gainsboro rounded-md h-11 p-4 ml-16 mt-9 bg-transparent"
                placeholder="Company (Optional)"/>
        </div>
        <div className="text-xs font-normal text-grey-main">
                <input
                className="w-[650px] border-[1px] boder-gainsboro rounded-md h-11 p-4 ml-16 mt-9 bg-transparent"
                placeholder="Address"/>
        </div>
        <div className="flex w-[650px] ml-16 mt-9 text-xs font-normal text-grey-main">
        {/* First half */}
        <div className="flex-1">
            <input
            className="w-full border-1 border-gainsboro rounded-md h-11 p-4 bg-transparent"
            placeholder="Postal Code"
            />
        </div>

        {/* Divider - Nếu bạn muốn có khoảng cách giữa hai input */}
        <div className="w-4"></div>

        {/* Second half */}
        <div className="flex-1">
            <input
            className="w-full border-1 border-gainsboro rounded-md h-11 p-4 bg-transparent"
            placeholder="City"
            />
        </div>
        </div>
        <div className="text-xs font-normal text-grey-main">
                <input
                className="w-[650px] border-[1px] boder-gainsboro rounded-md h-11 p-4 ml-16 mt-5 bg-transparent"
                placeholder="Phone"/>
        </div>
        <div className="flex items-center ml-16 mt-2">
        <input
            type="checkbox"
            id="special-offers"
            name="special-offers"
            className="form-checkbox h-5 w-5 text-black" 
        />
        <label htmlFor="new-offers" className="text-xs font-lexend text-main-color ml-2">Send me a special offers through text</label>
        </div>
        <h1 className="text-xl font-lexend font-medium text-main-color mt-6 ml-14">Payment</h1>
        <div className="flex flex-col p-4 space-y-4 ml-10">
            {/* Option 1 */}
            <label className="flex items-center w-full border boder-gainsboro rounded-md p-4 cursor-pointer">
            <input
                type="radio"
                name="payment"
                value="cash"
                className="form-radio h-5 w-5 text-main-color mr-2"
                id="payment_cash"
            />
            <span>By cash when receive</span>
            </label>

            {/* Option 2 */}
            <label className="flex items-center justify-between w-full border rounded-md p-4 cursor-pointer">
            <input
                type="radio"
                name="payment"
                value="momo"
                className="form-radio h-5 w-5 text-main-color mr-2"
                id="payment_momo"
            />
            <span>Momo</span>
            <img
                src={MomoImage}
                alt="Momo"
                className="ml-auto"
            />
            </label>

            {/* Option 3 */}
            <label className="flex items-center justify-between w-full border rounded-md p-4 cursor-pointer">
            <input
                type="radio"
                name="payment"
                value="zalopay"
                className="form-radio h-5 w-5 text-main-color mr-2"
                id="payment_zalopay"
            />
            <span>Zalopay</span>
            <img
                src={ZaloPayImage}
                alt="ZaloPay"
                className="ml-auto"
            />
            </label>  
    </div>
        <div className="ml-16 mt-8" >
                <button className="bg-button-black w-[650px] h-10 rounded-[10px] text-white text-xs font-semibold" >Pay now</button>
        </div>
      </div>
      <div className="flex-1">
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
                <span className="text-lg font-semibold text-red-600 mr-14">240.000</span>
            </div>
        </div>
        <div className="flex items-center space-x-4 p-4 bg-white shadow rounded-lg ml-12 mt-2">
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
                <span className="text-lg font-semibold text-red-600 mr-14">240.000</span>
            </div>
        </div>
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
                <p className="text-xl text-gray-600">Subtotal</p>
                <p className="text-xl text-gray-600 mt-2">Shipping</p>
                <p className="text-xl font-bold mt-2">Total</p>
            </div>
            <div className="flex flex-col items-end space-y-2 p-4 mr-9">
                <p className="text-xl font-bold text-gray-600">120.000</p>
                <p className="text-xl font-bold text-gray-600">40.000</p>
                <p className="text-xl font-bold text-red-600">180.000</p>
            </div>
        </div>

      </div>
    </div>
        </SplideSlide>
    );

};

export default CheckOut;
