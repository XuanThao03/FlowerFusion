import React, {useState} from 'react';
import styles from './search.module.scss';
import {IC_Search} from '../../assets/icons';
export const Search = ({onChange}) => {
  return (
    <div class={styles.searchContainer}>
      <div class={styles.searchInput}>
        <input
          onChange={onChange}
          className={styles.search}
          type="text"
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="button-addon1"
        />

        <button
          class={styles.btnSearch}
          type="button"
          id="button-addon1"
          data-te-ripple-init
          data-te-ripple-color="light">
          <img src={IC_Search} />
        </button>
      </div>
    </div>
  );
};
