import React from 'react';
import './App.scss';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './redux/productsSlice';
import { AppRouter } from './Components/AppRouter/AppRouter';
import { useCheckAuth } from './API/services/Auth/useCheckAuth';

function App() {
  const productsInCart = useSelector((state: any) => state.product.products);
  const dispatch = useDispatch();
  const { refresh } = useCheckAuth();

  React.useEffect(() => {
    const productsFromStorage = localStorage.getItem('productsInCart') 
      ? JSON.parse(localStorage.getItem('productsInCart') || '{}') : null;
    if (productsFromStorage) {
      dispatch(getProducts(productsFromStorage));
    }
    refresh();
  }, []);

  React.useEffect(() => {
    localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
  }, [productsInCart]);

  return (
    <div className='App'>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
