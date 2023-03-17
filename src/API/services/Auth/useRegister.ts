import React from 'react';
import axios from 'axios';
import { url } from '../../index';

export const useRegister = (onSuccess: any) => {
    const [emailErrorRequest, setEmailErrorRequest] = React.useState('');
      const [error, setError] = React.useState('');

  function register({email, password}: any) {
    axios.post(`${url}/registration`, {email, password})
      .then(response => {
        onSuccess();
      })
      .catch((e) => {
        setError(e.response.data.message);
        if (e.response.data.errors && e.response.data.errors.email) {
          setEmailErrorRequest(e.response.data.errors.email)
        }
      })
  }

  return { emailErrorRequest, error, register };
}