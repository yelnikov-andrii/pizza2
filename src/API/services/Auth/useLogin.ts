import { setUser } from '../../../redux/authSlice';
import { url } from '../../../API/index';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { UserAuth } from '../../../types/types';

export const useLogin = ({email, password}: UserAuth) => {
  const [error, setError] = React.useState('');
  const [emailErrorRequest, setEmailErrorRequest] = React.useState('');
  const [passwordErrorRequest, setPasswordErrorRequest] = React.useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function login() {
    setEmailErrorRequest('');
    setPasswordErrorRequest('');
    setError('');
    axios.defaults.withCredentials = true;
    axios.post(`${url}/login`, {email, password})
      .then(response => {
        dispatch(setUser(response.data.user));
        localStorage.setItem('accessToken', response.data.accessToken);
        navigate('/personal-account');
      })
      .catch((e) => {
        setError(e.response.data.message);
        if (e.response.data.errors && e.response.data.errors.email) {
          setEmailErrorRequest(e.response.data.errors.email);
        }

        if (e.response.data.errors && e.response.data.errors.password) {
          setPasswordErrorRequest(e.response.data.errors.password);
        }
      });
  }

  return { login, error, emailErrorRequest, passwordErrorRequest };
};
