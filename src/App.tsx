/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './App.scss';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getProducts } from './redux/productsSlice';
import { AppRouter } from './Components/AppRouter/AppRouter';
import { useGetCountOfProducts } from './hooks/useGetCountOfProducts';
import axios from 'axios';
import { setUser } from './redux/authSlice';
import { url } from './data';

function App() {
  const productsInCart = useSelector((state: any) => state.product.products);
  const countOfProducts = useGetCountOfProducts(productsInCart);
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.auth.user);

  React.useEffect(() => {
    const productsFromStorage = localStorage.getItem('productsInCart') ? JSON.parse(localStorage.getItem("productsInCart") || '{}') : null;
    if (productsFromStorage) {
      dispatch(getProducts(productsFromStorage))
    }
  }, []);

  React.useEffect(() => {
    if (productsInCart.length > 0) {
      localStorage.setItem('productsInCart', JSON.stringify(productsInCart))
    } else {
      localStorage.setItem('productsInCart', JSON.stringify(productsInCart))
    }
  }, [productsInCart]);

  async function checkAuth() {
    axios.get(url + '/refresh', {
      withCredentials: true,
      credentials: 'include',
    } as any)
      .then(response => {
        localStorage.setItem('accessToken', response.data.accessToken);
        dispatch(setUser(response.data.user));
      })

  }

  React.useEffect(() => {

    checkAuth()
    .catch((e) => {
      if (e.response.data.status === 401) {
        checkAuth()
          .then((response: any) => {
            localStorage.setItem('accessToken', response.data.accessToken);
          dispatch(setUser(response.data.user));
          })
          .catch((e) => {
            console.log(e);
          })
      }
    })
  }, []);

      return (
        <div className="App">
            <Header count={countOfProducts} />
            <AppRouter />
            <Footer />
        </div>
      );
    }

export default App;
