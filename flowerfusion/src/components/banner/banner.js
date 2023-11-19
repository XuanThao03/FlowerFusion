import React, { Component } from "react";
import { IMG_bgBanner } from "../../assets/images";
import styles from "./banner.module.scss";
export class Banner extends Component {
  render() {
    return (
      <div
        className={styles.container}
        style={{
          background: `url(${IMG_bgBanner})`,
        }}
      >
        <div className={styles.topBanner} />
        <div className="flex justify-center">
          <div className={styles.text1}> OUR BLACK FRIDAY SALE IS LIVE!</div>
          <div className={styles.text2}>
            UP TO 40% OFF - ITEMS WILL SELL OUT
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
