import { url } from '../..';
import { setUser } from '../../../redux/authSlice';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export const useCheckAuth = () => {
  const dispatch = useDispatch();
  async function refresh() {
    return axios.get(`${url}/refresh`)
      .then(response => {
        localStorage.setItem('accessToken', response.data.accessToken);
        dispatch(setUser(response.data.user));
      });
  };

  return { refresh };
};