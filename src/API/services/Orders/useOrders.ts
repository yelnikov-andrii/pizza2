import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { url } from '../../../API/index';
import { useCheckAuth } from '../../../API/services/Auth/useCheckAuth';
import { setUser } from '../../../redux/authSlice';
import { useDispatch } from 'react-redux';

export const useOrders = () => {
  const user = useSelector((state: any) => state.auth.user);
  const accessToken = localStorage.getItem('accessToken');
  const [orders, setOrders] = React.useState([]);
  const [ordersError, setOrdersError] = React.useState('');
  const [ordersLoading, setOrdersLoading] = React.useState(false);
  const { refresh } = useCheckAuth();
  const dispatch = useDispatch();

  React.useEffect(() => {
    setOrdersLoading(true);
    axios.get(`${url}/orders/?email=${user.email}`, {
      headers:{
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => {
        setOrders(response.data);
      })
      .catch( (e) => {
        if (e.response.status === 401) {
          refresh()
            .then(() => {
              const accessToken = localStorage.getItem('accessToken');
              axios.get(`${url}/orders/?email=${user.email}`, {
                headers:{
                  Authorization: `Bearer ${accessToken}`,
                },
                withCredentials: true,
              })
                .then(response => {
                  setOrders(response.data);
                  setOrdersLoading(true);
                })
                .catch((e) => {
                  if (e.response.status === 401) {
                    dispatch(setUser(null));
                    localStorage.setItem('accessToken', '');
                  }
                  setOrdersError(e.response.data.message);
                  setOrdersLoading(false);
                })
                .finally(() => {
                  setOrdersLoading(false);
                });
            });
        }
      })
      .finally(() => {
        setOrdersLoading(false);
      });
  }, []);

  const ordersNormalized = orders.map((order: any) => {
    const date = new Date(order.createdAt);
    const newOrder = {...order, createdAt: date};
    return newOrder;
  });

  return { ordersNormalized, ordersError, ordersLoading };
};