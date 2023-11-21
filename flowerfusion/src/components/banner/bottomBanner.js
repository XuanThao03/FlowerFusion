import React from "react";
import styles from "./bottomBanner.module.scss";
import { IMG_bgBtBanner } from "../../assets/images";
function BottomBanner() {
  return (
    <div
      className={styles.container}
      style={{
        background: `url(${IMG_bgBtBanner})`,
      }}
    >
      BottomBanner
    </div>
  );
}

export default BottomBanner;
