import React from "react";
import styles from "./itemFlower.module.scss";
import { IMG_Flower1, IMG_Flower2 } from "../../assets/images";
import { IC_Heart } from "../../assets/icons";

function ItemFlower(props) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgContainer}>
        <div
          className="w-full h-full flex justify-center"
          style={{
            background: `url(${props.img})`,
          }}
        >
          <div className="w-full mx-3 justify-between flex my-3">
            <div class={styles.coupon}>{props.discount}</div>
            <div class={styles.favorite}>
              <img src={IC_Heart} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.inforContainer}>
          <div className={styles.txtName}>{props.name}</div>
          <div className={styles.txtPrice}>{props.price}</div>
        </div>
        <div>
          <button className={styles.btnAdd2Cart}>Add to card</button>
        </div>
      </div>
    </div>
  );
}
export default ItemFlower;
