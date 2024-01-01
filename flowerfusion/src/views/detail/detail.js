import React from 'react';
import {NavigationBar} from '../../components/navigationBar/NavigationBar';
import ItemProductInCart from '../../components/itemProduct_Cart/itemProduct_cart';

const product = [
  'FAUX KIKU FLOWER - CREAM ',
  'FAUX PAMPAS GRASS - PLUSH PINK ',
  'FAUX PAMPAS GRASS - PLUSH PINK ',
  'FAUX PAMPAS GRASS - PLUSH PINK ',
  'FAUX PAMPAS GRASS - PLUSH PINK ',
  'FAUX PAMPAS GRASS - PLUSH PINK ',
];

const productList = product.map(type => {
  return (
    <div className=" px-5 py-4 border-t-2">
      <ItemProductInCart text={type} />
    </div>
  );
});
function Detail() {
  return (
    <div className=" w-full h-full">
      <NavigationBar />
      <div class="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <label for="my-drawer-4" class="drawer-button btn btn-primary">
            Open drawer
          </label>
        </div>
        <div class="drawer-side">
          <label
            for="my-drawer-4"
            aria-label="close sidebar"
            class="drawer-overlay"></label>
          <div className=" w-1/4 h-full bg-white flex flex-col">
            <p className="font-Lexend text-xl font-normal text-quartz my-3 ml-5">
              MY CART
            </p>
            <div className="w-full h-2/3  overflow-x-scroll no-scrollbar">
              {productList}
            </div>
            <p className="px-5 py-2 font-Lexend font-medium text-sm">
              Discount
            </p>
            <div className="flex justify-between mr-5">
              <form>
                <input
                  type="text"
                  id="Discount"
                  name="Discount"
                  className=" border-gainsboro w-full rounded-lg mx-5"
                />
              </form>
              <button className="bg-black text-white py-2 px-4 rounded-lg">
                Discount
              </button>
            </div>
            <div className="flex justify-between mr-5 mt-3">
              <p className="px-5 py-2 font-Lexend font-medium text-sm">Total</p>
              <p className="py-2 font-Lexend font-semibold text-lg">
                1.500.000 VND
              </p>
            </div>
            <button className="bg-black my-3 w-4/5  h-12 p-3 rounded-lg text-white self-center">
              Go to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
