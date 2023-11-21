import React, { Component, useState } from "react";
import styles from "./checkboxFilter.module.scss";

export class CheckboxFilter extends Component {
  constructor(props) {
    super(props);
    this.state = { n: false };
  }
  render() {
    const createList2 = this.props.value
      .slice(0, this.state.n ? this.props.value.length : 5)
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
        <p className={styles.txtHeader}>{this.props.title}</p>

        <form className={styles.form}>
          <ul>
            {createList2}
            <li>
              <button
                type="button"
                className={styles.showAll}
                onClick={() => this.setState({ n: !this.state.n })}
              >
                {this.props.value.length > 5
                  ? this.state.n
                    ? "Show less"
                    : "Show all"
                  : ""}
              </button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default CheckboxFilter;
