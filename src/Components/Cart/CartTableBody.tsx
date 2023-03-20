import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { CartTableCounter } from './CartTableCounter';
import { removeProduct } from '../../redux/productsSlice';

export const CartTableBody = () => {
  const productsInCart = useSelector((state: any) => state.product.products);
  const dispatch = useDispatch();
  return (
    <tbody>
      {productsInCart.map((product: any) => (
        <tr
          key={product.id}
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
            {!product.hasOwnProperty('selectedSize') ? '-' : product.selectedSize === 0 ? '32 см' : '42 см'}
          </td>
          <td className='cart__souse'>
            {product.selectedSouse || '-'}
          </td>
          <td className='cart__tablePrice'>
            {(product.prices && product.prices[product.selectedSize]) || product.price}
          </td>
          <td>
            <CartTableCounter product={product} />
          </td>
          <td>
            {(product.prices && product.quantity * product.prices[product.selectedSize]) || product.price}
          </td>
          <td>
            <button
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                dispatch(removeProduct(product.id));
              }}
            >
              Видалити
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

