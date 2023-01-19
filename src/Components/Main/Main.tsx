import React from 'react';
import { Container } from 'react-bootstrap';
import { categoriesArr, url } from '../../data';
import { useGetThreeProducts } from '../../hooks/useGetThreeProducts';
import { MainProduct } from './MainProduct';
import Categories from './Categories';
import { Pizza } from '../Products/Pizza/Pizzas/Pizza';
import { SushiItem } from '../Products/Sushi/Sushi/SushiItem';
import { Shaurma } from '../Products/Shaurma/Shaurmas/Shaurma';
import { Salad } from '../Products/Salad/Salads/Salad';
import { Snack } from '../Products/Snack/Snacks/Snack';
import { Soupe } from '../Products/Soupe/Soupes/Soupe';
import { MangalItem } from '../Products/Mangal/Mangal/MangalItem';

export const Main = () => {
  const [pizzas, pizzasLoading, pizzasError]: any = useGetThreeProducts(url + '/pizzas/?count=3');
  const [sushi, sushiLoading, sushiError]: any = useGetThreeProducts(url + '/sushi/?count=3');
  const [shaurma, shaurmaLoading, shaurmaError]: any = useGetThreeProducts(url + '/shaurma/?count=3');
  const [salads, saladsLoading, saladsError]: any = useGetThreeProducts(url + '/salads/?count=3');
  const [mangal, mangalLoading, mangalError]: any = useGetThreeProducts(url + '/mangal/?count=3');
  const [snacks, snacksLoading, snacksError]: any = useGetThreeProducts(url + '/snacks/?count=3');
  const [soupes, soupesLoading, soupesError]: any = useGetThreeProducts(url + '/soupes/?count=3');

  return (
    <Container 
      className='main' 
      fluid
    >
      <Categories arr={categoriesArr} />
      <MainProduct 
        categoryName="Піца" 
        categoryLink="pizzas" 
        loading={pizzasLoading} 
        error={pizzasError}
      >
        {pizzas.map((pizza: any) => (
          <Pizza 
            pizza={pizza} 
            key={pizza.id}
            link={`/pizzas/${pizza.id}`}
          />
        ))}
      </MainProduct>
      <MainProduct 
        categoryName="Суші" 
        categoryLink="sushi"
        loading={sushiLoading} 
        error={sushiError}
      >
        {sushi.map((sushiItem: any) => (
          <SushiItem 
            sushiItem={sushiItem} 
            key={sushiItem.id}
            link={`/sushi/${sushiItem.id}`}
          />
        ))}
      </MainProduct>
      <MainProduct 
        categoryName="Шаурма" 
        categoryLink="shaurma"
        loading={shaurmaLoading} 
        error={shaurmaError}
      >
        {shaurma.map((shaurmaItem: any) => (
          <Shaurma 
            shaurma={shaurmaItem} 
            key={shaurmaItem.id}
            link={`/shaurma/${shaurmaItem.id}`}
          />
        ))}
      </MainProduct>
      <MainProduct 
        categoryName="Салати" 
        categoryLink="salads"
        loading={saladsLoading} 
        error={saladsError}
      >
        {salads.map((salad: any) => (
          <Salad 
            salad={salad} 
            key={salad.id}
            link={`/salads/${salad.id}`}
          />
        ))}
      </MainProduct>
      <MainProduct 
        categoryName="Мангал" 
        categoryLink="mangal"
        loading={mangalLoading} 
        error={mangalError}
      >
        {mangal.map((mangalItem: any) => (
          <MangalItem 
            mangal={mangalItem} 
            key={mangalItem.id} 
            link={`/mangal/${mangalItem.id}`}
          />
        ))}
      </MainProduct>
      <MainProduct 
        categoryName="Закуски" 
        categoryLink="snacks"
        loading={snacksLoading} 
        error={snacksError}
      >
        {snacks.map((snack: any) => (
          <Snack 
            snack={snack} 
            key={snack.id} 
            link={`/snacks/${snack.id}`}
          />
        ))}
      </MainProduct>
      <MainProduct 
        categoryName="Супи" 
        categoryLink="soupes"
        loading={soupesLoading} 
        error={soupesError}
      >
        {soupes.map((soupe: any) => (
          <Soupe 
            soupe={soupe} 
            key={soupe.id} 
            link={`/soupes/${soupe.id}`}
          />
        ))}
      </MainProduct>
    </Container>
  );
};

