import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/authSlice';
import { url } from '../../index';

export const useActivate = () => {
  const { activationToken } = useParams();
  const [isActivated, setIsActivated] = React.useState(false);
  const [checking, setChecking] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setChecking(true);
    axios.get(`${url}/activation/${activationToken}`)
      .then(response => {
        dispatch(setUser(response.data.user));
        localStorage.setItem('accessToken', response.data.accessToken);
        setIsActivated(true);
      })
      .catch((e) => {
        setIsActivated(false);
      })
      .finally(() => {
        setChecking(false);
        setChecked(true);
      })
  }, []);

  return {isActivated, checked, checking};
}