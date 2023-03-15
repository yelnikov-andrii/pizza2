import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useRequest } from '../../hooks/useRequest';
import { Container } from 'react-bootstrap';
import { LoadingOval } from '../UI/Loading/LoadingOval';
import { useGetSum } from '../../hooks/useGetSum';
import { url } from '../../data';

export const Order: React.FC <any> = () => {
    const { id } = useParams();
    const [order, orderLoading, orderError]: any = useRequest(getOrder);
    const [products, setProducts] = React.useState<any[]>([]);
    const [initialProducts, setInitialProducts] = React.useState<any[]>([]);
    const {sum} = useGetSum(products, initialProducts);
    const accessToken = localStorage.getItem('accessToken');

    function getOrder() {
      return axios.get(`${url}/orders/?id=${id}`, {
        headers: {
          authorization: `Bearer ${accessToken}`
        }
      })
    }

    async function getProduct(id: any) {
      return axios.get(`${url}/products/${id}`)
      .then(response => response.data)
    }

        React.useEffect(() => {
          const pros: any[] = [];
      if (order) {
        const productsInCart = JSON.parse(order.products).map((product: any) => product);
        setInitialProducts(productsInCart);
      const produtPromises = JSON.parse(order.products).map((product: any) => {
        if (typeof(product.id) === 'string' && product.id.indexOf('s')) {
          return product.id.slice(0, product.id.indexOf('s'));
        } else {
          return product.id
        }
      }).map(async (p: any) => {
        const pro = await getProduct(p);
          setProducts(products => [...products, pro]);
          return pro;
      });
      Promise.all(produtPromises).then(values => setProducts(values));
      }
        }, [order, useRequest])

    if (orderError) {
      return (
        <Container className='order'>
          <p>
            Error {orderError}
          </p>
        </Container>
      )
    }

  return (
    <Container className='order'>
      {orderLoading === true ? (
          <LoadingOval />
      ) : (
            <>
            {order && (
              <>
                <h1>{order.createdAt}</h1>
              <p>
                Адреса: {order.address}
              </p>
              Продукти:
              <table>
              <thead>
                <tr>
                  <th className='cart__photo'>
                    Фото
                  </th>
                  <th>
                    Назва
                  </th>
                  <th className='cart__size'>
                    Розмір
                  </th>
                  <th className='cart__souse'>
                    Соус
                  </th>
                  <th className='cart__tablePrice'>
                    Ціна
                  </th>
                  <th className='cart__quantity'>
                    Кількість
                  </th>
                  <th>
                    Сума
                  </th>
                </tr>
              </thead>
              <tbody>
                {products && products.map((product, index) => (
                  <tr 
                    key={product.id.toString() + index.toString()}
                  >
                  <td className='cart__photo'>
                    <img 
                      src={product.img} 
                      alt="" 
                      className='cart__img'
                    />
                  </td>
                  <td>
                    {product.name}
                  </td>
                  <td className='cart__size'>
                    {!initialProducts[index].hasOwnProperty('selectedSize') ? '-' : initialProducts[index].selectedSize === 0 ? '32 см' : '42 см'}
                  </td>
                  <td className='cart__souse'>
                    {initialProducts[index].selectedSouse || '-'}
                  </td>
                  <td className='cart__tablePrice'>
                    {(product.prices && product.prices[initialProducts[index].selectedSize]) || product.price}
                  </td>
                  <td className='cart__quantity'>
                    {initialProducts[index].quantity}
                  </td>
                  <td>
                    {(product.prices && initialProducts[index].quantity * product.prices[initialProducts[index].selectedSize]) || product.price * initialProducts[index].quantity}
                  </td>
                </tr>
                ))}
              </tbody>
              </table>
              <p className='cart__sum'>
                Сума замовлення: {sum} грн.
              </p>
              </>
            )}
            </>
      )}
    </Container>
  );
};

