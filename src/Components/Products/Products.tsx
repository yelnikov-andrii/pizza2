import React from 'react';
import Container from 'react-bootstrap/Container';
import { TypeList } from '../UI/TypeList/TypeList';
import { useRequest } from '../../hooks/useRequest';
import { url } from '../../API/index';
import axios from 'axios';
import { Loading } from '../UI/Loading/Loading';
import { Product } from './Product/Product';
import { Search } from '../UI/SearchBlock/Search';
import { useScrollTop } from '../../hooks/useScrollTop';
import { UpButton } from '../UI/UpButton/UpButton';
import { LoadMore } from '../UI/LoadMore/LoadMore';
import { Loader } from '../UI/Loader/Loader';

interface Props {
  typeId: number;
  productCategories: string[];
  name: string;
}

export const Products: React.FC <Props> = ({ typeId, productCategories, name }) => {
  useScrollTop();
  
  const [filterType, setFilterType] = React.useState('Усі');
  const [searchInput, setSearchInput] = React.useState('');
  const [selectedOption, setSelectedOption] = React.useState('');
  const options = [
    'За назвою А-Я',
    'За назвою Я-А',
    'За ціною від меншої до більшої',
    'За ціною від більшої до меншої',
  ];
  const [page, setPage] = React.useState(1);
  const [appliedInput, setAppliedInput] = React.useState('');
  let timer: NodeJS.Timeout | null = null;

  React.useEffect(() => {
    const delay = 1000;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      setAppliedInput(searchInput);
    }, delay);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [searchInput]);

  const getProducts = React.useCallback(() => {
    if (filterType === 'Усі') {
      if (appliedInput) {
        return axios.get(`${url}/products?typeId=${typeId}`);
      }

      return axios.get(`${url}/products?typeId=${typeId}&limit=9&page=${page}` as any);
    } else {

      if (appliedInput) {
        return axios.get(`${url}/products?typeId=${typeId}&category=${filterType}`);
      }

      return axios.get(`${url}/products?typeId=${typeId}&category=${filterType}&limit=9&page=${page}`);
    }
  }, [filterType, page, appliedInput]);

  const [products, loading , error, totalCount, currentPage]: any = useRequest(getProducts);
  const filteredProducts = products;
  const countOfPages = Math.ceil(totalCount / 9);

  const searchedProducts = React.useMemo(() => {
    if (!filteredProducts) {
      return [];
    }

    if (appliedInput) {
      return filteredProducts.filter((product: any) => 
        product.name.toLowerCase().includes(appliedInput.toLowerCase()) 
        || appliedInput.toLowerCase().includes(product.name.toLowerCase()));
    } else {
      return filteredProducts;
    }
  }, [appliedInput, filteredProducts]);

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

  function loadmore() {
    setPage(prev => prev + 1);
  }

  return (
    <>
      <Container>
        <h1 className='main__header'>
          {name}
        </h1>
      </Container>
      {loading && page === 1 ? (
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
              setPage={setPage}
            />
            {sortedProducts.length !== 0 && (
              <h4 className='products__count'>
                Кількість продуктів: {appliedInput ? searchedProducts.length : totalCount}
              </h4>
            )}
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
            <UpButton />
          </Container>
          <Container>
            {page !== 1 && loading ? (
              <Loader />
            ) : (
              (currentPage ? (+currentPage !== countOfPages) : (1 !== countOfPages)) && (!searchInput) 
              && (
                <LoadMore 
                  loadmore={loadmore}
                />
              )
            )}
          </Container>
        </>
      )}
    </>
  );
};

