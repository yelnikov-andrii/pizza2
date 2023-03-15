import React from 'react';
import Container from 'react-bootstrap/Container';
import { TypeList } from '../UI/TypeList/TypeList';
import { useRequest } from '../../hooks/useRequest';
import { url } from '../../data';
import axios from 'axios';
import { Loading } from '../UI/Loading/Loading';
import { Product } from './Product/Product';

export const Products: React.FC <any> = ({typeId, productCategories, name}) => {
  const [products, loading , error]: any = useRequest(getProducts);
  const [filterType, setFilterType] = React.useState('Усі');
  let filteredProducts = products;

  function getProducts() {
    return axios.get(`${url}/products?typeId=${typeId}`, {
      // withCredentials: true,
    } as any)
  }

  if (filterType !== 'Усі') {
    filteredProducts = products.filter((product: any) => product.categories.includes(filterType));
  }

  if (error) {
    return (
      <Container className='main'>
        <h1>Error: we will not show you products, because {error}</h1>
      </Container>
    )
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
              <TypeList 
                filterType={filterType} 
                setFilterType={setFilterType} 
                types={productCategories} 
              />
            </Container>
            <Container className='products'>
              {filteredProducts && filteredProducts.map((product: any) => (
                <Product 
                  product={product} 
                  key={product.id}
                />
              ))}
            </Container>
          </>
      )}
    </>
  );
};

