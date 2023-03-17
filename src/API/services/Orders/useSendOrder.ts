import axios from 'axios';
import { useDispatch } from 'react-redux';
import { url } from '../../../API';
import { clearCart } from '../../../redux/productsSlice';

export const useSendOrder = () => {
  const dispatch = useDispatch();

  function sendOrder(order: any, setFilled: any, clearForm: any, ) {
    axios.post(`${url}/orders`, order)
      .then(response => {
        localStorage.setItem('productsInCart', '');
        dispatch(clearCart());
        setFilled(true);
        clearForm()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return { sendOrder };
}