import React from 'react';
import Container from 'react-bootstrap/Container';
import { TypeList } from '../UI/TypeList/TypeList';
import { useRequest } from '../../hooks/useRequest';
import { url } from '../../API/index';
import axios from 'axios';
import { Loading } from '../UI/Loading/Loading';
import { Product } from './Product/Product';
import { Search } from '../UI/SearchBlock/Search';

interface Props {
  typeId: number;
  productCategories: string[];
  name: string;
}

export const Products: React.FC <Props> = ({ typeId, productCategories, name }) => {
  const [products, loading , error]: any = useRequest(getProducts);
  const [filterType, setFilterType] = React.useState('Усі');
  const [searchInput, setSearchInput] = React.useState('');
  const [selectedOption, setSelectedOption] = React.useState('');
  const options = [
    'За назвою А-Я',
    'За назвою Я-А',
    'За ціною від меншої до більшої',
    'За ціною від більшої до меншої',
  ];
  let filteredProducts = products;

  function getProducts() {
    return axios.get(`${url}/products?typeId=${typeId}`, {
      withCredentials: true,
    } as any);
  };

  if (filterType !== 'Усі') {
    filteredProducts = products.filter((product: any) => product.categories.includes(filterType));
  }

  const searchedProducts = React.useMemo(() => {
    if (!filteredProducts) {
      return [];
    }

    if (searchInput) {
      return filteredProducts.filter((product: any) => 
        product.name.toLowerCase().includes(searchInput.toLowerCase()) 
        || searchInput.toLowerCase().includes(product.name.toLowerCase()));
    } else {
      return filteredProducts;
    }
  }, [searchInput, filteredProducts]);

  const sortedProducts = React.useMemo(() => {
    switch(selectedOption) {
    case 'За назвою А-Я':
      return searchedProducts.sort((a: any, b: any) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    case 'За назвою Я-А':
      return searchedProducts.sort((a: any, b: any) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()));
    case 'За ціною від меншої до більшої':
      return searchedProducts.sort((a: any, b: any) => {
        if (a.price) {
          return a.price - b.price;
        }

        return a.prices[0] - b.prices[0];
      });
    case 'За ціною від більшої до меншої':
      return searchedProducts.sort((a: any, b: any) => {
        if (a.price) {
          return b.price - a.price;
        }

        return b.prices[0] - a.prices[0];
      });
    default:
      return searchedProducts;
    }
  }, [searchedProducts, selectedOption]);

  if (error) {
    return (
      <Container className='main'>
        <h1>Продукти не вдалося завнтажити. Помилка: {error}</h1>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <h1 className='main__header'>
          {name}
        </h1>
      </Container>
      {loading ? (
        <Container>
          <Loading />
        </Container>
      ) : (
        <>
          <Container>
            <Container>
              <Search 
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                options={options}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            </Container>
            <TypeList 
              filterType={filterType} 
              setFilterType={setFilterType} 
              types={productCategories} 
            />
          </Container>
          <Container className='products'>
            {sortedProducts.length === 0 ? (
              <div className="products__notfound">
                <h2>
                  Продукти не були знайдені
                </h2>
              </div>
            ) : (
              sortedProducts && sortedProducts.map((product: any) => (
                <Product 
                  product={product} 
                  key={product.id}
                />
              ))
            )}
          </Container>
        </>
      )}
    </>
  );
};

