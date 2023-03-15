import { useDispatch } from "react-redux";
import { addProduct, increment, incrementWithValue } from '../redux/productsSlice';

export const useAddProduct = (product: any, selectedSize: any, selectedSouse: any, showAlert: any, productsInCart: any, quantity: any, card: boolean) => {
  const dispatch = useDispatch();
  function add() {
    const copyProduct = JSON.parse(JSON.stringify(product));
        if (product.sizes) {
          copyProduct.selectedSize = selectedSize;
        }

        if (product.souses) {
          copyProduct.selectedSouse = copyProduct.souses[selectedSouse];
        }

        if (copyProduct.selectedSize !== undefined && copyProduct.selectedSouse !== undefined) {
          copyProduct.id += 'size' + copyProduct.selectedSize + copyProduct.selectedSouse;
        }

        if (copyProduct.selectedSize === undefined && copyProduct.selectedSouse !== undefined) {
          copyProduct.id += 'souse' + copyProduct.selectedSouse;
        }
        
        copyProduct.quantity = quantity || 1;

        showAlert()
        if (productsInCart.some((pizza: any) => pizza.id === copyProduct.id)) {
          if (!card) {
            dispatch(increment(copyProduct.id));
          }
          if (card) {
            const obj = {quantity, id: copyProduct.id};
            dispatch(incrementWithValue(obj))
          }
        } else {
          dispatch(addProduct(copyProduct));
        }
  }
  return { add }
}