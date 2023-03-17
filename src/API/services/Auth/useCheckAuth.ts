import axios from "axios"
import { useDispatch } from "react-redux"
import { url } from "../.."
import { setUser } from "../../../redux/authSlice";

export const useCheckAuth = () => {
  const dispatch = useDispatch();
  async function refresh() {
    return axios.get(`${url}/refresh`, {
      withCredentials: true,
    })
    .then(response => {
      localStorage.setItem('accessToken', response.data.accessToken);
      dispatch(setUser(response.data.user));
    })
    .catch((e) => {
      console.log(e);
    })
  };

  return { refresh }
}