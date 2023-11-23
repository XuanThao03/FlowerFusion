import React, { Component, useState } from "react";
import { Header } from "../../components/header/Header";
import { NavigationBar } from "../../components/navigationBar/NavigationBar";
import { BtnTab } from "../../components/btnTab/BtnTab";
import styles from "./catalog.module.scss";
import { ItemFlower } from "../../components/itemFlower/ItemFlower";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { IMG_Flower1 } from "../../assets/images";
import "@splidejs/react-splide/css";
import PriceSlider from "../../components/filter/price/PriceSlider";
import CheckboxFilter from "../../components/filter/checkboxFilter/checkboxFilter";
import BottomBanner from "../../components/banner/bottomBanner";
import { NavLink, Link } from "react-router-dom";
const typeProducts = [
  "Roses",
  "Wedding bouquets",
  "Birthday bouquets",
  "Lavenders",
  "Roses",
  "Wedding bouquets",
  "Wedding bouquets",
  "Wedding bouquets",
  "Roses",
  "Wedding bouquets",
  "Birthday bouquets",
  "Lavenders",
  "Roses",
  "Wedding bouquets",
  "Wedding bouquets",
  "Wedding bouquets",
];
const arrival = [
  { name: "Letter box friendly", quantity: 55 },
  { name: "Comes pre-arranged", quantity: 65 },
];
const categories = [
  { name: "Roses", quantity: 46 },
  { name: "Tulip", quantity: 47 },
  { name: "Lavenders", quantity: 40 },
  { name: "Sunflower", quantity: 55 },
  { name: "Daisy", quantity: 57 },
  { name: "Orchild", quantity: 46 },
  { name: "Lily", quantity: 46 },
  { name: "Hydrangea", quantity: 46 },
  { name: "Roses", quantity: 46 },
  { name: "Roses", quantity: 46 },
  { name: "Tulip", quantity: 46 },
  { name: "Lavenders", quantity: 46 },
  { name: "Sunflower", quantity: 46 },
  { name: "Daisy", quantity: 46 },
  { name: "Orchild", quantity: 46 },
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
const quantity = [
  { name: "1-10", quantity: "" },
  { name: "11-20", quantity: "" },
  { name: "21-30", quantity: "" },
  { name: "31-40", quantity: "" },
  { name: "41-50", quantity: "" },
  { name: "51-60", quantity: "" },
  { name: "61-70", quantity: "" },
  { name: "71-80", quantity: "" },
  { name: "81-90", quantity: "" },
  { name: "91-100", quantity: "" },
  { name: "Other", quantity: "" },
];
const typeLists = typeProducts.map((type) => {
  return (
    <SplideSlide className={styles.btnTab}>
      <BtnTab text={type} />
    </SplideSlide>
  );
});
const flowerLists = typeProducts.map((type) => {
  return (
    <Link className="flex justify-center" to="/detail" exact={true}>
      <ItemFlower className={styles.itemFlower} />
    </Link>
  );
});
export class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = { n: 3 };
  }
  render() {
    return (
      <div>
        {/* <Header /> */}
        <NavigationBar />
        {/* <div>
          <ul className="md:flex overflow-scroll no-scrollbar ">{typeLists}</ul>
        </div> */}
        {/* <div>
          <div>
            <Splide
              hasTrack={false}
              options={{
                type: "loop",
                gap: "0.5em",
                perPage: 5,
                focus: "center",
                pagination: false,
              }}
              aria-label="Movies On Show"
            >
              <SplideTrack className=" first:ml-10">{typeLists}</SplideTrack>
            </Splide>
          </div>
        </div> */}
        <div className={styles.catalogContainer}>
          <div className={styles.filterContainer}>
            <PriceSlider />
            <CheckboxFilter title={"Arrival"} value={arrival} />
            <CheckboxFilter title={"Categories"} value={categories} />
            <CheckboxFilter title={"Color"} value={colors} />
            <CheckboxFilter title={"Counter"} value={quantity} />
          </div>
          <div className={styles.flowerContainer}>{flowerLists}</div>
        </div>
        <BottomBanner />
      </div>
    );
  }
}

export default Catalog;
