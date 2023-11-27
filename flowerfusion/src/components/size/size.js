import React from 'react';
import styles from './size.module.scss';

const Size = ({pieces, price}) => {
  return (
    <button className=" focus-within:bg-white-coffee hover:bg-white-coffee border p-2 flex justify-between items-center border-detail-border">
      <span className="font-lexend font-bold">{pieces}</span>
      <span>{price}</span>
    </button>
  );
};
export default Size;
