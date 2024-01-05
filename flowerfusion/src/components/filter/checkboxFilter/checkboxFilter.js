import React, {Component, useState} from 'react';
import styles from './checkboxFilter.module.scss';

export class CheckboxFilter extends Component {
  constructor(props) {
    super(props);
    //this.state = {n: false};
    this.state = {
      expanded: false,
      selectedFilters: {},
    };
  }
  handleCheckboxChange = (type, isChecked) => {
    const newSelectedFilters = {
      ...this.state.selectedFilters,
      [type]: isChecked,
    };
    this.setState({selectedFilters: newSelectedFilters});

    // Kiểm tra xem hàm callback nào được truyền từ props và gọi nó
    if (isChecked) {
      if (
        this.props.title === 'Color' &&
        typeof this.props.onFilterChangeByColor === 'function'
      ) {
        this.props.onFilterChangeByColor(type);
      } else if (
        this.props.title === 'Arrival' &&
        typeof this.props.onFilterChangeByArrival === 'function'
      ) {
        this.props.onFilterChangeByArrival(type);
      } else if (
        this.props.title === 'Categories' &&
        typeof this.props.onFilterChangeByCategories === 'function'
      ) {
        this.props.onFilterChangeByCategories(type);
      }
    } else {
      // Gọi hàm callback với giá trị null nếu không có checkbox nào được check
      if (
        this.props.title === 'Color' &&
        typeof this.props.onFilterChangeByColor === 'function'
      ) {
        this.props.onFilterChangeByColor(type);
      } else if (
        this.props.title === 'Arrival' &&
        typeof this.props.onFilterChangeByArrival === 'function'
      ) {
        this.props.onFilterChangeByArrival(type);
      } else if (
        this.props.title === 'Categories' &&
        typeof this.props.onFilterChangeByCategories === 'function'
      ) {
        this.props.onFilterChangeByCategories(null);
      }
    }
  };

  render() {
    const createList2 = this.props.value
      .slice(0, this.state.expanded ? this.props.value.length : 5)
      .map((type, index) => {
        return (
          <li key={index} className={styles.liContainer}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id={`checkbox-${type.name}`}
              name={`checkbox-${type.name}`}
              value={type.name}
              onChange={e =>
                this.handleCheckboxChange(type.name, e.target.checked)
              }
            />
            <div className="flex justify-between w-4/5">
              <label
                htmlFor={`checkbox-${type.name}`}
                className={styles.txtItem}>
                {type.name}
              </label>
              <label
                htmlFor={`checkbox-${type.name}`}
                className={styles.txtQuantity}>
                {type.quantity}
              </label>
            </div>
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
                //onClick={() => this.setState({n: !this.state.n})}>
                onClick={() => this.setState({expanded: !this.state.expanded})}>
                {this.props.value.length > 5
                  ? this.state.expanded
                    ? 'Show less'
                    : 'Show all'
                  : ''}
              </button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default CheckboxFilter;
