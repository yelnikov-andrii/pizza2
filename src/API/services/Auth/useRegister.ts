import { url } from '../../index';
import React from 'react';
import axios from 'axios';
import { UserAuth } from '../../../types/types';

export const useRegister = (onSuccess: () => void) => {
  const [emailErrorRequest, setEmailErrorRequest] = React.useState('');
  const [error, setError] = React.useState('');

  function register({email, password}: UserAuth) {
    axios.post(`${url}/registration`, {email, password})
      .then(response => {
        onSuccess();
      })
      .catch((e) => {
        setError(e.response.data.message);
        if (e.response.data.errors && e.response.data.errors.email) {
          setEmailErrorRequest(e.response.data.errors.email);
        }
      });
  }

  return { emailErrorRequest, error, register };
};