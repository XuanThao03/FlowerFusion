import axios from 'axios';
import orderEmail from '../../ultils/orderingEmail';

//increasenum
export const increaseNum =
  (
    contact,
    name,
    company,
    address,
    phone,
    payment,
    total,
    discount,
    quantity,
    products,
  ) =>
  async (dispatch, getState) => {
    var userEmail = 'non-user';
    const userInfo = getState().userLogin;
    if (userInfo) {
      userEmail = userInfo.userInfo?.email;
    } else {
    }

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const {data} = await axios.post(`/api/orders/increase`, {}, config);
    } catch (error) {
      console.log(error);
    }
  };

//push
export const placeOrder =
  (
    contact,
    name,
    company,
    address,
    phone,
    payment,
    total,
    discount,
    quantity,
    products,
  ) =>
  async (dispatch, getState) => {
    var userEmail = 'non-user';
    const userInfo = getState().userLogin;
    if (userInfo) {
      userEmail = userInfo.userInfo?.email;
    }
    var params = {
      to_email: `${contact} `,
      name: `${name} `,
      payment: `${payment} `,
      phone: `${phone} `,
      address: `${address} `,
      itemtotal: `${total} `,
    };

    orderEmail(params);

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const {dataOrder} = await axios.post(
        `/api/orders`,
        {
          userEmail,
          contact,
          name,
          company,
          address,
          phone,
          isNewOffer: true,
          isSpecialOffer: true,
          payment,
          total,
          discount,
          quantity,
          status: 'Pending',
          products,
        },
        config,
      );
    } catch (error) {
      console.log(error);
    }
  };

//get history
export const getHistory = () => async (dispatch, getState) => {
  const userInfo = getState().userLogin;
  const userEmail = userInfo.userInfo.email;
  console.log('us', userEmail);

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.userInfo.token}`,
      },
    };
    const {data} = await axios.post(
      `/api/orders/getorders`,
      {userEmail},
      config,
    );
    dispatch({type: 'SET_ORDERS', payload: data});
    localStorage.setItem('orders', JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};
