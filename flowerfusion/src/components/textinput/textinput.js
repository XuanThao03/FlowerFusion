import React from 'react';
import styles from './textinput.module.scss';
const TextInput = ({placeholder, onChange}) => {
  return (
    <div className="text-xs font-normal text-main-color">
      <input
        className="w-[650px] border-[1px] boder-gainsboro rounded-md h-11 p-4 ml-16 mt-5 bg-transparent"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
export default TextInput;
