import React, { Component, useState } from "react";
import styles from "./checkboxFilter.module.scss";
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
        <label className={styles.txtItem}>{type.name}</label>
        <label className={styles.txtQuantity}>{type.quantity}</label>
      </li>
    </li>
  );
});
export class CheckboxFilter extends Component {
  constructor(props) {
    super(props);
    this.state = { n: true };
  }
  render() {
    const createList2 = categories
      .slice(0, this.state.n ? 5 : 3)
      .map((type) => {
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
              <label className={styles.txtItem}>{type.name}</label>
              <label className={styles.txtQuantity}>{type.quantity}</label>
            </li>
          </li>
        );
      });

    return (
      <div className={styles.container}>
        <p className={styles.txtHeader}>Arrival</p>

        <form className={styles.form}>
          <ul>
            {createList2}
            <li>
              <button
                type="button"
                className={styles.showAll}
                onClick={() => this.setState({ n: !this.state.n })}
              >
                {this.state.n ? "Show less" : "Show all"}
              </button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default CheckboxFilter;
