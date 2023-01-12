import axios from 'axios';
import React from 'react';
import './App.scss';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Header } from './Components/Header/Header';
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


export const pizzasContext = React.createContext({});

function App() {
  const [pizzas, setPizzas] = React.useState<any>([]);
  const [pizzasInCart, setPizzasInCart] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const countOfPizzas = pizzasInCart.reduce((initialValue: any, pizza: any) => initialValue + pizza.quantity, 0);

  React.useEffect(() => {
    setLoading(true);
    axios.get('https://apipizzas.onrender.com/pizzas').then(res => {
      setPizzas(res.data);
    })
    .catch(e => setError(e.message))
    .finally(() => {
      setLoading(false);
    })
  }, []);

      return (
        <div className="App">
          <pizzasContext.Provider value={{pizzas, pizzasInCart, setPizzasInCart}}>
            <Header count={countOfPizzas}/>
            <Routes>
              <Route path='/pizzas' element={<Main loading={loading} error={error}/>}>
              </Route>
              <Route path='/pizzas/:pizzaId' element={<PizzaCard />}>
              </Route>
              <Route
                path="/"
                element={<Navigate to="/pizzas" replace />}
              />
              <Route path='/cart' element={<Cart pizzasInCart={pizzasInCart}/>}>
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
            </Routes>
            <Footer />
          </pizzasContext.Provider>
        </div>
      );
    }

export default App;
