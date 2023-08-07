/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';
import { categoriesArr } from '../../utils/data';
import { MainProduct } from './MainProduct';
import Categories from './Categories';
import { Product } from '../Products/Product/Product';
import { useProductsByCategory  } from '../../hooks/useProductsByCategory';
import { Loading } from '../UI/Loading/Loading';
import { useScrollTop } from '../../hooks/useScrollTop';
import { UpButton } from '../UI/UpButton/UpButton';

export const Main = () => {
  useScrollTop();
  const [pizzas, pizzasLoading, pizzasError] = useProductsByCategory(1);
  const [sushi, sushiLoading, sushiError] = useProductsByCategory(2);
  const [shaurma, shaurmaLoading, shaurmaError] = useProductsByCategory(3);
  const [salads, saladsLoading, saladsError] = useProductsByCategory(4);
  const [mangal, mangalLoading, mangalError] = useProductsByCategory(5);
  const [snacks, snacksLoading, snacksError] = useProductsByCategory(6);
  const [soupes, soupesLoading, soupesError] = useProductsByCategory(7);

  return (
    <Container 
      className='main'
      fluid
    >
      <Categories arr={categoriesArr} />
      {pizzasLoading ? (
        <Container>
          <Loading />
        </Container>
      ) : (
        <>
          <MainProduct 
            categoryName="Піца" 
            categoryLink="pizzas" 
            error={pizzasError}
          >
            {pizzas && pizzas.map((pizza: any) => (
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
            error={sushiError}
          >
            {sushi && sushi.map((sushiItem: any) => (
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
            error={shaurmaError}
          >
            {shaurma && shaurma.map((shaurmaItem: any) => (
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
            error={saladsError}
          >
            {salads && salads.map((salad: any) => (
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
            error={snacksError}
          >
            {snacks && snacks.map((snack: any) => (
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
            error={mangalError}
          >
            {mangal && mangal.map((mangalItem: any) => (
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
            error={soupesError}
          >
            {soupes && soupes.map((soupe: any) => (
              <Product 
                product={soupe} 
                key={soupe.id}
                link={`/soupes/${soupe.id}`}
              />
            ))}
          </MainProduct>
          <UpButton />
        </>
      )}
      
    </Container>
  );
};

