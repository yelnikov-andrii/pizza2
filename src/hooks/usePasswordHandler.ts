import React, { Dispatch, SetStateAction } from 'react';

export const usePasswordHandler = (setPassword: Dispatch<SetStateAction<string>>) => {
  const [passwordError, setPasswordError] = React.useState('');

  function handlePassword(password: string) {
    if (!password) {
      setPasswordError('Password can not be empty');
    }
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }

    setPassword(password);
  }

  return { passwordError, handlePassword };
};
