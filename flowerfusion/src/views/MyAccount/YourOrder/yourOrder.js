import React, {useEffect} from 'react';
import styles from './yourOrder.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {getHistory} from '../../../Redux/Actions/orderAction';
function YourOder() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHistory());
  }, [dispatch]);
  const orderList = useSelector(state => state.orders);
  console.log('ordders', orderList);

  const orderDetail = [
    {
      orderID: '"#FFF110"',
      day: ' 21/11/2023',
      address: 'Ký túc xá khu B, Đông Hòa, Dĩ An, Bình Dương',
      value: '1.120.300 VNĐ',
      status: 'Completed',
    },
    {
      orderID: '"#FFF121"',
      day: ' 22/11/2023',
      address: 'BCons Plaza, Đông Hòa, Dĩ An, Bình Dương',
      value: '1.120.300 VNĐ',
      status: 'Shipping',
    },
    {
      orderID: '"#FFF121"',
      day: ' 22/11/2023',
      address: 'BCons Plaza, Đông Hòa, Dĩ An, Bình Dương',
      value: '1.120.300 VNĐ',
      status: 'Shipping',
    },
    {
      orderID: '"#FFF121"',
      day: ' 22/11/2023',
      address: 'BCons Plaza, Đông Hòa, Dĩ An, Bình Dương',
      value: '1.120.300 VNĐ',
      status: 'Cancel',
    },
    {
      orderID: '"#FFF121"',
      day: ' 22/11/2023',
      address: 'BCons Plaza, Đông Hòa, Dĩ An, Bình Dương',
      value: '1.120.300 VNĐ',
      status: 'Processing',
    },
  ];
  const createTable = orderList.map(order => {
    return (
      <tr>
        <td className={styles.txtRow}>#{order._id}</td>
        <td className={styles.txtRow}>{order.createdAt.slice(0, 10)}</td>
        <td>{order.address}</td>
        <td className={styles.txtRow}>{order.total}</td>
        <td className={styles.txtRow}>
          {order.status === 'Completed' ? (
            <p className={styles.txtRowCompleted}>{order.status}</p>
          ) : order.status === 'Shipping' ? (
            <p className={styles.txtRowShipping}>{order.status}</p>
          ) : order.status === 'Processing' ? (
            <p className={styles.txtRowProcessing}>{order.status}</p>
          ) : (
            <p className={styles.txtRowCancel}>{order.status}</p>
          )}
        </td>
      </tr>
    );
  });
  return (
    <div className={styles.mainContainer}>
      <p className={styles.txtTitle}>Your Order</p>
      <table className="table">
        <tr className={styles.tableHeader}>
          <th className={styles.txtHeader}>ORDER</th>
          <th className={styles.txtHeader}>DAY</th>
          <th className={styles.txtHeader}>ADDRESS</th>
          <th className={styles.txtHeader}>ORDER VALUE</th>
          <th className={styles.txtHeader}>SHIPPING STATUS</th>
        </tr>
        {createTable}
      </table>
    </div>
  );
}

export default YourOder;
