import React from "react";
import styles from "./bottomBanner.module.scss";
import { IMG_bgBtBanner } from "../../assets/images";
import { IC_Search } from "../../assets/icons";
function BottomBanner() {
  return (
    <div
      className={styles.container}
      style={{
        background: `url(${IMG_bgBtBanner})`,
      }}
    >
      <div>
        <p className={styles.text1}>SIGN UP TO OUR NEWSLETTER</p>
        <p className={styles.text2}>
          Subscribe to be the first to know about re-stocks, new releases and
          special deals.
        </p>
        <form>
          <label
            //for="search"
            class={styles.txtLabel}
          >
            Email
          </label>
          <div class="relative">
            <input
              type="search"
              id="search"
              class={styles.tbxContainer}
              placeholder="Email"
              required
            />
            <button type="submit" class={styles.btnSubmit}>
              Summit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BottomBanner;
