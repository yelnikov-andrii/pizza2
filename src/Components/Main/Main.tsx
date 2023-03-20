import React from 'react';
import { Container } from 'react-bootstrap';
import { categoriesArr } from '../../utils/data';
import { MainProduct } from './MainProduct';
import Categories from './Categories';
import { useGetMainPageProducts } from '../../hooks/useGetMainPageProducts';
import { Product } from '../Products/Product/Product';

export const Main = () => {
  const { pizzaObj, sushiObj, shaurmaObj, saladsObj, snacksObj, soupesObj, mangalObj } = useGetMainPageProducts();

  return (
    <Container 
      className='main'
      fluid
    >
      <Categories arr={categoriesArr} />
      <MainProduct 
        categoryName="Піца" 
        categoryLink="pizzas" 
        loading={pizzaObj.pizzasLoading} 
        error={pizzaObj.pizzasError}
      >
        {pizzaObj.pizzas && pizzaObj.pizzas.map((pizza: any) => (
          <Product 
            product={pizza} 
            key={pizza.id}
            link={`/pizzas/${pizza.id}`}
          />
        ))}
      </MainProduct>
      <MainProduct 
        categoryName="Суші" 
        categoryLink="sushi" 
        loading={sushiObj.sushiLoading} 
        error={sushiObj.sushiError}
      >
        {sushiObj.sushi && sushiObj.sushi.map((sushiItem: any) => (
          <Product 
            product={sushiItem} 
            key={sushiItem.id}
            link={`/sushi/${sushiItem.id}`}
          />
        ))}
      </MainProduct>
      <MainProduct 
        categoryName="Шаурма" 
        categoryLink="shaurma" 
        loading={shaurmaObj.shaurmaLoading} 
        error={shaurmaObj.shaurmaError}
      >
        {shaurmaObj.shaurma && shaurmaObj.shaurma.map((shaurmaItem: any) => (
          <Product 
            product={shaurmaItem} 
            key={shaurmaItem.id}
            link={`/shaurma/${shaurmaItem.id}`}
          />
        ))}
      </MainProduct>
      <MainProduct 
        categoryName="Салати"
        categoryLink="salads" 
        loading={saladsObj.saladsLoading} 
        error={saladsObj.saladsError}
      >
        {saladsObj.salads && saladsObj.salads.map((salad: any) => (
          <Product 
            product={salad} 
            key={salad.id}
            link={`/salads/${salad.id}`}
          />
        ))}
      </MainProduct>
      <MainProduct 
        categoryName="Закуски"
        categoryLink="snacks" 
        loading={snacksObj.snacksLoading} 
        error={snacksObj.snacksError}
      >
        {snacksObj.snacks && snacksObj.snacks.map((snack: any) => (
          <Product 
            product={snack} 
            key={snack.id}
            link={`/snacks/${snack.id}`}
          />
        ))}
      </MainProduct>
      <MainProduct 
        categoryName="Мангал"
        categoryLink="mangal" 
        loading={mangalObj.mangalLoading} 
        error={mangalObj.mangalError}
      >
        {mangalObj.mangal && mangalObj.mangal.map((mangalItem: any) => (
          <Product 
            product={mangalItem} 
            key={mangalItem.id}
            link={`/mangal/${mangalItem.id}`}
          />
        ))}
      </MainProduct>
      <MainProduct 
        categoryName="Супи"
        categoryLink="soupes" 
        loading={soupesObj.soupesLoading} 
        error={soupesObj.soupesError}
      >
        {soupesObj.soupes && soupesObj.soupes.map((soupe: any) => (
          <Product 
            product={soupe} 
            key={soupe.id}
            link={`/soupes/${soupe.id}`}
          />
        ))}
      </MainProduct>
    </Container>
  );
};

