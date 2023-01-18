/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Pizzas } from './Components/Pizzas/Pizzas';
import { Main } from './Components/Main/Main';
import { PizzaCard } from './Components/PizzaCard/PizzaCard';
import { Cart } from './Components/Cart/Cart';
import { Delivery } from './Components/Delivery/Delivery';
import { Blog } from './Components/Blog/Blog';
import { About } from './Components/About/About';
import { Discounts } from './Components/Discounts/Discounts';
import { Places } from './Components/Places/Places';
import { Vacancies } from './Components/Vacancies/Vacancies';
import { Contacts } from './Components/Contacts/Contacts';
import { Login } from './Components/Login/Login';
import { Footer } from './Components/Footer/Footer';
import { Sushi } from './Components/Sushi/Sushi';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getProducts } from './redux/productsSlice';
import { SushiCard } from './Components/SushiCard/SushiCard';
import { Shaurmas } from './Components/Shaurmas/Shaurmas';
import { ShaurmaCard } from './Components/ShaurmaCard/ShaurmaCard';
import { Salads } from './Components/Salads/Salads';
import { SaladCard } from './Components/SaladCard/SaladCard';
import { Mangal } from './Components/Mangal/Mangal';
import { MangalCard } from './Components/MangalCard/MangalCard';
import { Snacks } from './Components/Snacks/Snacks';
import { SnackCard } from './Components/SnackCard/SnackCard';
import { Soupes } from './Components/Soupes/Soupes';
import { SoupeCard } from './Components/SoupeCard/SoupeCard';

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
            <Routes>
              <Route path='/' element={<Main />}>
              </Route>
              <Route path='/pizzas' element={<Pizzas/>}>
              </Route>
              <Route path='/pizzas/:pizzaId' element={<PizzaCard />}>
              </Route>
              <Route path='/cart' element={<Cart productsInCart={productsInCart}/>}>
              </Route>
              <Route path='/delivery' element={<Delivery />}>
              </Route>
              <Route path='/blog/*' element={<Blog />}>
              </Route>
              <Route path='/about' element={<About />}>
              </Route>
              <Route path='/discounts' element={<Discounts />}>
              </Route>
              <Route path='/places' element={<Places />}>
              </Route>
              <Route path='/vacancies' element={<Vacancies />}>
              </Route>
              <Route path='/contacts' element={<Contacts />}>
              </Route>
              <Route path='/login' element={<Login />}>
              </Route>
              <Route path='/sushi' element={<Sushi />}>
              </Route>
              <Route path='/sushi/:sushiId' element={<SushiCard />}>
              </Route>
              <Route path='/shaurma' element={<Shaurmas />}>
              </Route>
              <Route path='/shaurma/:shaurmaId' element={<ShaurmaCard />}>
              </Route>
              <Route path='/salads' element={<Salads />}>
              </Route>
              <Route path='/salads/:saladId' element={<SaladCard />}>
              </Route>
              <Route path='/mangal' element={<Mangal />}>
              </Route>
              <Route path='/mangal/:mangalId' element={<MangalCard />}>
              </Route>
              <Route path='/snacks' element={<Snacks />}>
              </Route>
              <Route path='/snacks/:snackId' element={<SnackCard />}>
              </Route>
              <Route path='/soupes' element={<Soupes />}>
              </Route>
              <Route path='/soupes/:soupeId' element={<SoupeCard />}>
              </Route>
            </Routes>
            <Footer />
        </div>
      );
    }

export default App;
