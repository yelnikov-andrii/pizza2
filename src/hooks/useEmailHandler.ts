import React, { Dispatch, SetStateAction} from 'react';

export const useEmailHandler = (setEmail: Dispatch<SetStateAction<string>>) => {
  const [emailError, setEmailError] = React.useState('');

  const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

  function validateEmail(str: string) {
    if (!str) {
      return 'Email can not be empty';
    }
    if (regexEmail.test(str)) {
      return '';
    } else {
      return 'Email is not valid';
    }
  }

  const emailHandler = (str: string) => {
    setEmailError('');
    setEmail(str);
    setEmailError(validateEmail(str));
  };

  return {emailHandler, emailError};
};
