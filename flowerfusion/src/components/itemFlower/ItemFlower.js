import React from "react";
import styles from "./itemFlower.module.scss";
import { IMG_Flower1 } from "../../assets/images";
import { IC_Heart } from "../../assets/icons";
export const ItemFlower = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgContainer}>
        <img src={IMG_Flower1}></img>
        <div class={styles.coupon}>10%</div>
        <div class={styles.favorite}>
          <img src={IC_Heart} />
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.inforContainer}>
          <div className={styles.txtName}>Joyful Wishes</div>
          <div className={styles.txtPrice}>400.000</div>
        </div>
        <div>
          <div className={styles.btnAdd2Cart}>Add to card</div>
        </div>
      </div>
    </div>
  );
};
