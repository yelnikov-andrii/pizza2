import { About } from "../Components/About/About";
import { Blog } from "../Components/Blog/Blog";
import { Cart } from "../Components/Cart/Cart";
import { Contacts } from "../Components/Contacts/Contacts";
import { Delivery } from "../Components/Delivery/Delivery";
import { Discounts } from "../Components/Discounts/Discounts";
import { Login } from "../Components/Login/Login";
import { Main } from "../Components/Main/Main"
import { Places } from "../Components/Places/Places";
import { Mangal } from "../Components/Products/Mangal/Mangal/Mangal";
import { MangalCard } from "../Components/Products/Mangal/MangalCard/MangalCard";
import { PizzaCard } from "../Components/Products/Pizza/PizzaCard/PizzaCard";
import { Pizzas } from "../Components/Products/Pizza/Pizzas/Pizzas";
import { SaladCard } from "../Components/Products/Salad/SaladCard/SaladCard";
import { Salads } from "../Components/Products/Salad/Salads/Salads";
import { ShaurmaCard } from "../Components/Products/Shaurma/ShaurmaCard/ShaurmaCard";
import { Shaurmas } from "../Components/Products/Shaurma/Shaurmas/Shaurmas";
import { SnackCard } from "../Components/Products/Snack/SnackCard/SnackCard";
import { Snacks } from "../Components/Products/Snack/Snacks/Snacks";
import { SoupeCard } from "../Components/Products/Soupe/SoupeCard/SoupeCard";
import { Soupes } from "../Components/Products/Soupe/Soupes/Soupes";
import { Sushi } from "../Components/Products/Sushi/Sushi/Sushi";
import { SushiCard } from "../Components/Products/Sushi/SushiCard/SushiCard";
import { Vacancies } from "../Components/Vacancies/Vacancies";

interface Route {
  path: string;
  component: any;
}

export const routes: Route[] = [
  {
    path: '/',
    component: <Main />,
  },
  {
    path: '/pizzas',
    component: <Pizzas />
  },
  {
    path: '/pizzas/:pizzaId',
    component: <PizzaCard />
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
    path: '/sushi',
    component: <Sushi />
  },
  {
    path: '/sushi/:sushiId',
    component: <SushiCard />
  },
  {
    path: '/shaurma',
    component: <Shaurmas />
  },
  {
    path: '/shaurma/:shaurmaId',
    component: <ShaurmaCard />
  },
  {
    path: '/salads',
    component: <Salads />
  },
  {
    path: '/salads/:saladId',
    component: <SaladCard />
  },
  {
    path: '/mangal',
    component: <Mangal />
  },
  {
    path: '/mangal/:mangalId',
    component: <MangalCard />
  },
  {
    path: '/snacks',
    component: <Snacks />
  },
  {
    path: '/snacks/:snackId',
    component: <SnackCard />
  },
  {
    path: '/soupes',
    component: <Soupes />
  },
  {
    path: '/soupes/:soupeId',
    component: <SoupeCard />
  }
];