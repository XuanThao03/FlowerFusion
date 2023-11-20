import React, { Component, useState } from "react";
import { Header } from "../../components/header/Header";
import { NavigationBar } from "../../components/naviagtionBar/NavigationBar";
import { BtnTab } from "../../components/btnTab/BtnTab";
import styles from "./catalog.module.scss";
import { ItemFlower } from "../../components/itemFlower/ItemFlower";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { IMG_Flower1 } from "../../assets/images";
import "@splidejs/react-splide/css";
import PriceSlider from "../../components/filter/price/PriceSlider";
import CheckboxFilter from "../../components/filter/checkboxFilter/checkboxFilter";
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

const typeLists = typeProducts.map((type) => {
  return (
    <SplideSlide className={styles.btnTab}>
      <BtnTab text={type} />
    </SplideSlide>
  );
});
const flowerLists = typeProducts.map((type) => {
  return (
    <SplideSlide>
      <ItemFlower className={styles.itemFlower} />
    </SplideSlide>
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
            <CheckboxFilter />
          </div>
          <div className={styles.flowerContainer}>{flowerLists}</div>
        </div>
      </div>
    );
  }
}

export default Catalog;
