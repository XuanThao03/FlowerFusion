import React from 'react';
import styles from './payment.module.scss';
import MomoImage from '../../assets/images/momo.png';
import ZaloPayImage from '../../assets/images/zalopay.png';
const PayMent = ({setPayment}) => {
  //   function getPaymentMethod() {
  //     var ele = document.getElementsByName('payment');

  //     for (var i = 0; i < ele.length; i++) {
  //       if (ele[i].checked) return ele[i].value;
  //     }
  //   }
  return (
    <div className="flex flex-col p-4 space-y-4 ml-10">
      <label className="flex items-center w-full border boder-gainsboro rounded-md p-4 cursor-pointer">
        <input
          checked={true}
          onClick={() => setPayment('By cash when receive')}
          type="radio"
          name="payment"
          value="cash"
          className="form-radio h-5 w-5 accent-main-color mr-2"
          id="payment_cash"
        />
        <span>By cash when receive</span>
      </label>

      <label className="flex items-center justify-between w-full border rounded-md p-4 cursor-pointer">
        <input
          onClick={() => setPayment('Momo')}
          type="radio"
          name="payment"
          value="momo"
          className="form-radio h-5 w-5 accent-main-color mr-2"
          id="payment_momo"
        />
        <span>Momo</span>
        <img src={MomoImage} alt="Momo" className="ml-auto" />
      </label>

      {/* <label className="flex items-center justify-between w-full border rounded-md p-4 cursor-pointer">
        <input
          onClick={setPayment}
          type="radio"
          name="payment"
          value="zalopay"
          className="form-radio h-5 w-5 accent-main-color mr-2"
          id="payment_zalopay"
        />
        <span>Zalopay</span>
        <img src={ZaloPayImage} alt="ZaloPay" className="ml-auto" />
      </label> */}
    </div>
  );
};
export default PayMent;
