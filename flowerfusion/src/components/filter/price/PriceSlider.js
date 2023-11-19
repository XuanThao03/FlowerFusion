import React, { useState } from "react";
import Slider from "react-slider";
import "./style.css";

const PriceSlider = () => {
  const [values, setValues] = useState([0, 100]);
  const handleChange = (newValues) => setValues(newValues);

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
        max={100}
      />
      <div className="priceContainer">
        <div className="valueContainer">
          <input
            className="min"
            type="number"
            id="minPrice"
            value={values[0]}
            min={0}
            max={100}
            onChange={(e) => handleChange([+e.target.value, values[1]])}
          />
        </div>
        <div className="valueContainer">
          <input
            className="min"
            type="number"
            id="maxPrice"
            value={values[1]}
            min={0}
            max={100}
            onChange={(e) => handleChange([values[0], +e.target.value])}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceSlider;
