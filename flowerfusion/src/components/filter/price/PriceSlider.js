import React, {useState} from 'react';
import Slider from 'react-slider';
import './style.css';
import {filterFlowersByPrice} from '../../../Redux/Actions/flowerAction';
import {useDispatch} from 'react-redux';

const PriceSlider = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState([0, 5000000]);
  const handleChange = newValues => {
    setValues(newValues);
    dispatch(filterFlowersByPrice(newValues)); // Dispatch the action when the price slider value changes
  };

  return (
    <div
      className="container"
      //   style={{
      //     padding: "20px",
      //     border: "1px solid #ddd",
      //     borderRadius: "5px",
      //     boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
      //   }}
    >
      <Slider
        className="slider"
        thumbClassName="thumb"
        value={values}
        onChange={handleChange}
        min={0}
        max={5000000}
        step={100000}
      />
      <div className="priceContainer">
        <div className="valueContainer">
          <input
            className="min"
            type="number"
            id="minPrice"
            value={values[0]}
            min={0}
            max={5000000}
            onChange={e => handleChange([+e.target.value, values[1]])}
          />
        </div>
        <div className="valueContainer">
          <input
            className="min border-collapse"
            type="number"
            id="maxPrice"
            value={values[1]}
            min={0}
            max={5000000}
            onChange={e => handleChange([values[0], +e.target.value])}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceSlider;
