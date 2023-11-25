import React, { Component, useState } from "react";
import { Header } from "../../../components/header/Header";
import { NavigationBar } from "../../../components/navigationBar/NavigationBar";
import { BtnTab } from "../../../components/btnTab/BtnTab";
import styles from "../catalog.module.scss";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { IMG_Flower1, IMG_Vase1, IMG_Vase2 } from "../../../assets/images";
import "@splidejs/react-splide/css";
import PriceSlider from "../../../components/filter/price/PriceSlider";
import CheckboxFilter from "../../../components/filter/checkboxFilter/checkboxFilter";
import BottomBanner from "../../../components/banner/bottomBanner";
import { NavLink, Link } from "react-router-dom";
import ItemFlower from "../../../components/itemFlower/ItemFlower";
const vases = [
  {
    img: IMG_Vase2,
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
  { img: IMG_Vase2, name: "Happy Wishes", price: "340.000", discount: "10%" },
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
    price: "340.000",
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
    img: IMG_Vase1,
    name: "Joyful Wishes",
    price: "440.000",
    discount: "10%",
  },
  {
    img: IMG_Vase2,
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
];
const categories = [
  { name: "Mason Jar", quantity: 46 },
  { name: "Bud Vase", quantity: 47 },
  { name: "Cylinder Vase", quantity: 40 },
  { name: "Ceramic Vase", quantity: 55 },
  { name: "Cube Vase", quantity: 57 },
  { name: "Mason Jar", quantity: 46 },
  { name: "Bud Vase", quantity: 47 },
  { name: "Cylinder Vase", quantity: 40 },
  { name: "Ceramic Vase", quantity: 55 },
  { name: "Cube Vase", quantity: 57 },
];

const colors = [
  { name: "White", quantity: "" },
  { name: "Pink", quantity: "" },
  { name: "Red", quantity: "" },
  { name: "Yello", quantity: "" },
  { name: "Orange", quantity: "" },
  { name: "Green", quantity: "" },
  { name: "Blue", quantity: "" },
  { name: "Purple", quantity: "" },
  { name: "Black", quantity: "" },
];
const vaseLists = vases.map((vase) => {
  return (
    <Link className="flex justify-center" to="/catalog/detail" exact={true}>
      <ItemFlower
        className={styles.itemFlower}
        img={vase.img}
        name={vase.name}
        price={vase.price}
        discount={vase.discount}
      />
    </Link>
  );
});
export class Vase extends Component {
  constructor(props) {
    super(props);
    this.state = { n: 3 };
  }
  render() {
    return (
      <div>
        <NavigationBar />
        <div className={styles.catalogContainer}>
          <div className={styles.filterContainer}>
            <PriceSlider />
            <CheckboxFilter title={"Categories"} value={categories} />
            <CheckboxFilter title={"Color"} value={colors} />
          </div>
          <div className={styles.flowerContainer}>{vaseLists}</div>
        </div>
        <BottomBanner />
      </div>
    );
  }
}

export default Vase;
