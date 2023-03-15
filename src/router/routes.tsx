import { About } from "../Components/About/About";
import { Blog } from "../Components/Blog/Blog";
import { Cart } from "../Components/Cart/Cart";
import { Contacts } from "../Components/Contacts/Contacts";
import { Delivery } from "../Components/Delivery/Delivery";
import { Discounts } from "../Components/Discounts/Discounts";
import { Login } from "../Components/Login/Login";
import { Main } from "../Components/Main/Main"
import { Places } from "../Components/Places/Places";
import { Vacancies } from "../Components/Vacancies/Vacancies";
import { Registration } from "../Components/Registration/Registration";
import { PageNotFound } from "../Components/PageNotFound/PageNotFound";
import { Activation } from "../Components/ActivationPage/Activation";
import { PersonalAccount } from "../Components/PersonalAccount/PersonalAccount";
import { Products } from "../Components/Products/Products";
import { ProductCard } from "../Components/ProductCard/ProductCard";
import { Order } from "../Components/PersonalAccount/Order";
import { RequireAuth } from "../Components/RequireAuth/RequireAuth";

interface Route {
  path: string;
  component: any;
}

export const routes: Route[] = [
  {
    path: '/pizza2',
    component: <Main />,
  },
  {
    path: '/pizzas',
    component: 
    <Products 
      typeId={1} 
      productCategories={['Усі', 'Сирні', 'М\'ясні', 'Овочеві', 'Фірмові', 'Морські']}
      name="Піца"
    />
  },
  {
    path: '/pizzas/:id',
    component: 
    <ProductCard />
  },
  {
    path: '/sushi',
    component: 
    <Products 
      typeId={2}
      productCategories={['Усі', 'Суші-сети', 'Cуші', 'Гункани', 'Роли', 'Теплі Роли']}
      name="Суші"
    />
  },
  {
    path: '/sushi/:id',
    component: 
    <ProductCard />
  },
  {
    path: '/shaurma',
    component: 
    <Products 
      typeId={3}
      productCategories={[]}
      name="Шаурма"
    />
  },
  {
    path: '/shaurma/:id',
    component: 
    <ProductCard />
  },
  {
    path: '/salads',
    component: 
    <Products 
      typeId={4}
      productCategories={[]}
      name="Салати"
    />
  },
  {
    path: '/salads/:id',
    component: 
    <ProductCard />
  },
  {
    path: '/mangal',
    component: 
    <Products 
      typeId={5}
      productCategories={[]}
      name="Мангал"
    />
  },
  {
    path: '/mangal/:id',
    component: 
    <ProductCard />
  },
  {
    path: '/snacks',
    component: 
    <Products 
      typeId={6}
      productCategories={['Усі', 'Холодні закуски', 'До пива',]}
      name="Закуски"
    />
  },
  {
    path: '/snacks/:id',
    component: 
    <ProductCard />
  },
  {
    path: '/soupes',
    component: 
    <Products 
      typeId={7}
      productCategories={['Усі', 'Японські супи', 'Перші страви',]}
      name="Супи"
    />
  },
  {
    path: '/soupes/:id',
    component: 
    <ProductCard />
  },
  {
    path: '/cart',
    component: <Cart />
  },
  {
    path: '/delivery',
    component: <Delivery />
  },
  {
    path: '/blog/*',
    component: <Blog />
  },
  {
    path: '/about',
    component: <About />
  },
  {
    path: '/discounts',
    component: <Discounts />
  },
  {
    path: '/places',
    component: <Places />
  },
  {
    path: '/vacancies',
    component: <Vacancies />
  },
  {
    path: '/contacts',
    component: <Contacts />
  },
  {
    path: '/login',
    component: <Login />
  },
  {
    path: '/registration',
    component: <Registration />
  },
  {
    path: '/activation/:activationToken',
    component: <Activation />
  },
  {
    path: '/personal-account',
    component: <RequireAuth>
      <PersonalAccount />
    </RequireAuth>
  },
  {
    path: '/personal-account/orders/:id',
    component: <Order  />
  },
  {
    path: '/*',
    component: <PageNotFound />
  },
];