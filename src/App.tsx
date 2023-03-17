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
import { useCheckAuth } from './API/services/Auth/useCheckAuth';

function App() {
  const productsInCart = useSelector((state: any) => state.product.products);
  const countOfProducts = useGetCountOfProducts(productsInCart);
  const dispatch = useDispatch();
  const { refresh } = useCheckAuth();

  React.useEffect(() => {
    const productsFromStorage = localStorage.getItem('productsInCart') ? JSON.parse(localStorage.getItem("productsInCart") || '{}') : null;
    if (productsFromStorage) {
      dispatch(getProducts(productsFromStorage))
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('productsInCart', JSON.stringify(productsInCart))
  }, [productsInCart]);



  React.useEffect(() => {
    refresh()
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
