import React from "react";
import styles from "./listbag.module.scss";
import { IMG_Flower1 } from "../../assets/images";
import { IC_Heart } from "../../assets/icons";

const ListBag = ({productName,productPrice}) => {
  return (
    <div>
      <div className="flex-col flex;">
              <img className="" src={IMG_Flower1} alt="Joyful Wishes Bouquet" />
              <h2 className="text-lg font-bold text-granite-gra">{productName}</h2>
              <div className="flex flex-row">
                  <div className="flex-1">
                      <p className="text-pine-tree font-bold mt-3">{productPrice}</p>
                  </div>
                      <div className="flex-1">
                      <button className="border border-detail-border px-2 py-2 rounded text-detail-text">
                      More detail
                      </button>
                  </div>
              </div>
        </div>
    </div>


  );
};
export default ListBag;
