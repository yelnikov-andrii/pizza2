import { setUser } from '../../../redux/authSlice';
import axios from 'axios';
import { url } from '../../../API/index';
import { useDispatch } from 'react-redux';

export const useLogout = () => {
  const dispatch = useDispatch();
  function logout() {
    axios.get(`${url}/logout`, {
      withCredentials: true
    })
    .then(response => {
      console.log('logout')
    })
    dispatch(setUser(null));
    localStorage.setItem('accessToken', '');
  }

  return { logout }
}