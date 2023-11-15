import React from "react";
import { IC_Account, IC_Bag, IC_Heart } from "../../assets/icons";

export const Header = () => {
  return (
    <div className="flex justify-between items-center py-4 bg-transparent">
      <div className="flex-shrink-0 mx-10 cursor-pointer justify-between">
        <i className="fas fa-drafting-compass fa-2x text-orange-500"></i>
        <span className=" text-2xl text-granite-gra font-Ephesis ml-">
          FlowerFusion
        </span>
      </div>
      <ul className="hidden md:flex overflow-x-hidden  font-semibold">
        <li className="tab-nav-container">
          <a className="text-granite-gra cursor-default" href="#">
            Home
          </a>
        </li>
        <li className="tab-nav-container">
          <a className="tab-nav" href="#">
            All of flowers
          </a>
        </li>
        <li className="tab-nav-container">
          <a className="tab-nav" href="#">
            Occasions
          </a>
        </li>
        <li className="tab-nav-container">
          <a className="tab-nav" href="#">
            Trending
          </a>
        </li>
        <li className="tab-nav-container">
          <a className="tab-nav" href="#">
            Gifts
          </a>
        </li>
        <li className="tab-nav-container">
          <a className="tab-nav" href="#">
            Blogs
          </a>
        </li>
        <ul className="hidden md:flex overflow-x-hidden mr-10 font-semibold">
          <li className=" mr-1 p-1 align-middle">
            <img src={IC_Bag} alt="Select Icon" />
          </li>
          <li className="  mr-1 p-1 align-middle">
            <img src={IC_Account} alt="Select Icon" />
          </li>
          <li className="   mr-1 p-1 align-middle">
            <img src={IC_Heart} alt="Select Icon" />
          </li>
        </ul>
      </ul>
    </div>
  );
};
