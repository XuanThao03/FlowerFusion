import React from 'react';
import styles from './description.module.scss';
const Description = ({placeholder}) => {
  return (
    <div className="">
      <div className="pl-[375px]">
        <h1 className=" font-bold font-Lexend text-xl">Description</h1>
      </div>
      <div className=" flex flex-col pr-[350px]">
        <p className="pl-[375px] text-[13px] mt-[27px] font-light font-Lexend">
          {placeholder}
        </p>
      </div>
    </div>
  );
};
export default Description;
