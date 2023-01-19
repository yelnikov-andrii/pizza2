/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './App.scss';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getProducts } from './redux/productsSlice';
import { AppRouter } from './Components/AppRouter/AppRouter';

function App() {
  const productsInCart = useSelector((state: any) => state.product.products);
  const dispatch = useDispatch();

    let countOfProducts = 0;
    countOfProducts = productsInCart.reduce((initialValue: any, product: any) => initialValue + product.quantity, 0);

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
      localStorage.clear()
    }
  }, [productsInCart])

      return (
        <div className="App">
            <Header count={countOfProducts} />
            <AppRouter />
            <Footer />
        </div>
      );
    }

export default App;
