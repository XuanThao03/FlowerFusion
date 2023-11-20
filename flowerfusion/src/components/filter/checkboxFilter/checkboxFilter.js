import React, { Component } from "react";
import styles from "./checkboxFilter.module.scss";
const categories = [
  "Roses",
  "Tulip",
  "Birthday bouquets",
  "Lavenders",
  "Roses",
  "Sunflower",
  "Daisy",
  "Lily",
  "Orchild",
  "Hydrangea",
  "Roses",
  "Tulip",
  "Birthday bouquets",
  "Lavenders",
  "Roses",
  "Sunflower",
  "Daisy",
  "Lily",
  "Orchild",
  "Hydrangea",
];

const createList = categories.map((type) => {
  return (
    <li className={styles.liContainer}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="arrival1"
        name="arrival1"
        value="arrival1"
      />
      <li className="flex justify-between w-4/5">
        <label className={styles.txtItem}>Letter box friendly</label>
        <label className={styles.txtQuantity}>46</label>
      </li>
    </li>
  );
});
export class CheckboxFilter extends Component {
  render() {
    return (
      <div className={styles.container}>
        <p className={styles.txtHeader}>Arrival</p>

        <form className={styles.form}>
          <ul>
            <li className={styles.liContainer}>
              <input
                className={styles.checkbox}
                type="checkbox"
                id="arrival1"
                name="arrival1"
                value="arrival1"
              />
              <li className="flex justify-between w-4/5">
                <label className={styles.txtItem}>Letter box friendly</label>
                <label className={styles.txtQuantity}>46</label>
              </li>
            </li>
            <li className={styles.liContainer}>
              <input
                className={styles.checkbox}
                type="checkbox"
                id="arrival1"
                name="arrival1"
                value="arrival1"
              />
              <li className="flex justify-between w-4/5">
                <label className={styles.txtItem}>Comes pre-arranged</label>
                <label className={styles.txtQuantity}>46</label>
              </li>
            </li>
            <li>
              <button className={styles.showAll}>Show all</button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default CheckboxFilter;
