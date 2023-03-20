import { useRequest } from './useRequest';
import axios from 'axios';
import { url } from '../API/index';


export const useGetMainPageProducts = () => {
  function getPizzas() {
    return createRequest(1);
  }

  function getSushi() {
    return createRequest(2);
  }

  function getShaurma() {
    return createRequest(3);
  }

  function getSalads() {
    return createRequest(4);
  }

  function getMangal() {
    return createRequest(5);
  }

  function getSnacks() {
    return createRequest(6);
  }

  function getSoupes() {
    return createRequest(7);
  }

  function createRequest (typeId: number) {
    return axios.get(`${url}/products?typeId=${typeId}&count=3`);
  }

  const [pizzas, pizzasLoading, pizzasError]: any = useRequest(getPizzas);
  const [sushi, sushiLoading, sushiError]: any = useRequest(getSushi);
  const [shaurma, shaurmaLoading, shaurmaError]: any = useRequest(getShaurma);
  const [salads, saladsLoading, saladsError]: any = useRequest(getSalads);
  const [mangal, mangalLoading, mangalError]: any = useRequest(getMangal);
  const [snacks, snacksLoading, snacksError]: any = useRequest(getSnacks);
  const [soupes, soupesLoading, soupesError]: any = useRequest(getSoupes);

  const pizzaObj = {
    pizzas, pizzasLoading, pizzasError,
  };

  const sushiObj = {
    sushi, sushiLoading, sushiError,
  };

  const shaurmaObj = {
    shaurma, shaurmaLoading, shaurmaError,
  };

  const saladsObj = {
    salads, saladsLoading, saladsError,
  };

  const mangalObj = {
    mangal, mangalLoading, mangalError,
  };

  const snacksObj = {
    snacks, snacksLoading, snacksError,
  };

  const soupesObj = {
    soupes, soupesLoading, soupesError,
  };

  return { pizzaObj, sushiObj, shaurmaObj, saladsObj, mangalObj, snacksObj, soupesObj };
};
