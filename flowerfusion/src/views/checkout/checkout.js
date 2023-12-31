import React, {useState, useMemo} from 'react';
import styles from './checkout.module.scss';
import FlowerCart from '../../components/flowercart/flowercart';
import PayMent from '../../components/payment/payment';
import DoubleInput from '../../components/doubleinput/doubleinput';
import TextInput from '../../components/textinput/textinput';
import ACBImage from '../../assets/images/acb.png';
import MomoImage from '../../assets/images/momo.png';
import ZaloPayImage from '../../assets/images/zalopay.png';
import {useDispatch, useSelector} from 'react-redux';
import {IC_Tick} from '../../assets/icons';
import {useNavigate} from 'react-router-dom';
import orderEmail from '../../ultils/orderingEmail';
import {increaseNum, placeOrder} from '../../Redux/Actions/orderAction';
import Message from '../../components/LoadingError/Error';
import {message} from 'antd';
import {deleteCart} from '../../Redux/Actions/cartAction';
import {IMG_qr} from '../../assets/images';

const CheckOut = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useMemo(() => {
    if (cartItems.length === 0) {
      return '0 VND';
    }
    const total = cartItems.reduce((acc, item) => {
      console.log('Item Price:', item.totalPrice);
      if (item.price && item.price.trim() !== '') {
        const priceAsNumber = parseFloat(item.price.replace(/\./g, ''));
        return acc + priceAsNumber;
      }
      return acc;
    }, 0);
    return total.toLocaleString('vi-VN');
  }, [cartItems]);
  const shippingFee = 40000;
  const totalWithShipping = useMemo(() => {
    const totalAmountAsNumber = parseFloat(totalAmount.replace(/\D/g, ''));
    const total = totalAmountAsNumber + shippingFee;
    return total.toLocaleString('vi-VN');
  }, [totalAmount, shippingFee]);

  const [contact, setContact] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [payment, setPayment] = useState('By cash when receive');
  const [discount, setDiscount] = useState('');

  const isAllFieldsFilled = useMemo(() => {
    return (
      contact.includes('@') &&
      contact.trim() !== '' &&
      name.trim() !== '' &&
      address.trim() !== '' &&
      phone.trim() !== ''
    );
  }, [contact, name, address, phone]);

  return (
    <div className="flex flex-row min-h-screen">
      <div className="flex-1">
        {
          <div className=" align-middle flex flex-col items-center">
            <h1 className="text-sm font-lexend font-medium text-main-color mt-8 ">
              Expess Checkout
            </h1>
            <div className="flex mt-5">
              <img src={ZaloPayImage} alt="ZaloPay" className="h-8 mx-2" />
              <img src={MomoImage} alt="Momo" className="h-8 mx-2" />
              <img src={ACBImage} alt="ACB" className="h-8 mx-2" />
            </div>
            <p className="text-xs font-lexend text-grey-main mt-4">Or</p>
          </div>
        }
        {
          <div className=" flex justify-between items-center w-full">
            <h1 className="text-xl font-lexend font-medium text-main-color mt-7 ml-14">
              Contact
            </h1>
            <div className="w-full text-right">
              <p className="text-xs font-medium text-main-color mt-7 mr-7">
                Have an account?{' '}
                <a href="/login" className="underline">
                  Log in
                </a>
              </p>
            </div>
          </div>
        }
        <TextInput
          placeholder="Email contact"
          value={contact}
          onChange={e => setContact(e.target.value)}
        />
        <div className="flex items-center ml-16 mt-2">
          <input
            type="checkbox"
            id="new-offers"
            name="new-offers"
            className="form-checkbox h-5 w-5 accent-main-color"
          />
          <label
            htmlFor="new-offers"
            className="text-xs font-lexend text-main-color ml-2">
            Email me with new offers
          </label>
        </div>
        <h1 className="text-xl font-lexend font-medium text-main-color mt-6 ml-14">
          Delivery
        </h1>
        {/* <TextInput
          placeholder="Country / Region"
          value={country}
          onChange={e => setCountry(e.target.value)}
        /> */}
        <TextInput
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextInput
          placeholder="Company (Optional)"
          value={company}
          onChange={e => setCompany(e.target.value)}
        />
        <TextInput
          placeholder="Address"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <TextInput
          placeholder="Phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <div className="flex items-center ml-16 mt-2">
          <input
            type="checkbox"
            id="special-offers"
            name="special-offers"
            className="form-checkbox h-5 w-5 accent-main-color"
          />
          <label
            htmlFor="new-offers"
            className="text-xs font-lexend text-main-color ml-2">
            Send me a special offers through text
          </label>
        </div>
        <h1 className="text-xl font-lexend font-medium text-main-color mt-6 ml-14">
          Payment
        </h1>
        <PayMent setPayment={setPayment} />
        <div className="ml-16 my-8">
          {!isAllFieldsFilled ? (
            <Message variant="alert-danger">
              Please enter your information and the correct email format
            </Message>
          ) : null}
          <button
            disabled={!isAllFieldsFilled ? true : false}
            className="bg-button-black w-[650px] h-10 rounded-[10px] text-white text-xs font-semibold mt-3"
            onClick={() => {
              if (payment === 'Momo') {
                document.getElementById('my_modal1').showModal();
              } else document.getElementById('my_modal').showModal();
              var quantity = 0;
              cartItems.forEach(element => {
                quantity += element.quantity;
              });
              message.success('Thank you for your order!');
              console.log(
                contact,
                name,
                company,
                address,
                phone,
                payment,
                totalWithShipping,
                discount,
                quantity,
                cartItems,
              );
              dispatch(increaseNum());
              dispatch(deleteCart());
              setTimeout(() => {
                dispatch(
                  placeOrder(
                    contact,
                    name,
                    company,
                    address,
                    phone,
                    payment,
                    totalWithShipping,
                    discount,
                    quantity,
                    cartItems,
                  ),
                );
              }, 5000);
            }}>
            Pay now
          </button>
        </div>
      </div>
      <div className="flex-1">
        {cartItems.map((item, index) => (
          <FlowerCart key={item.id} item={item} />
        ))}
        {
          <div className=" flex justify-between items-center w-full">
            <input
              onChange={e => setDiscount(e.target.value)}
              className="w-[500px] border-[1px] boder-gainsboro rounded-md h-11 p-4 ml-16 mt-9 bg-transparent"
              placeholder="Discount code or Gift card"
            />
            <div className="mt-9 mr-14">
              <button className="bg-button-black w-24 h-10 rounded-[10px] text-white text-xs font-semibold">
                Apply
              </button>
            </div>
          </div>
        }
        <div className="flex justify-between items-center px-4 py-2 mt-11 ml-12">
          <div>
            <p className="text-xl text-total-price">Subtotal</p>
            <p className="text-xl text-total-price mt-2">Shipping</p>
            <p className="text-xl text-total-price mt-2">Total</p>
          </div>
          <div className="flex flex-col items-end space-y-2 p-4 mr-9">
            <p className="text-xl font-bold text-pine-tree">{totalAmount}</p>
            <p className="text-xl font-bold text-pine-tree">40.000</p>
            <p className="text-xl font-bold text-red-price">
              {totalWithShipping}
            </p>
          </div>
        </div>
      </div>
      <dialog id="my_modal" className="modal">
        <div className="modal-box h-[360px] w-[636px] max-w-5xl flex flex-col items-center justify-around">
          <form method="dialog">
            {}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <img src={IC_Tick} />
          <div className="items-center  flex flex-col">
            <p className=" font-Lexend font-bold text-xl">
              PAYMENT DONE SUCCESSFULLY
            </p>
            <p className=" font-Lexend font-light text-sm">
              Thank you for shopping!
            </p>
          </div>

          <button
            onClick={() => navigate('/')}
            className="btn btn-neutral bg-button-black w-1/2 h-[50px] rounded-[10px] text-white text-xs font-[Lexend] font-normal">
            Continue
          </button>
        </div>
      </dialog>
      <dialog id="my_modal1" className="modal">
        <div className="modal-box h-4/5 w-1/3 max-w-5xl flex flex-col items-center justify-around">
          <form method="dialog">
            {}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <img src={IMG_qr} />
        </div>
      </dialog>
    </div>
  );
};

export default CheckOut;
