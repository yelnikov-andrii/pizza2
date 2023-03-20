import React from 'react';

export const useCheckPasswords = (
  password: string, passwordIsDirty: boolean, passwordError: string, confirmPassword: string) => {
  const [passwordIsValid, setPasswordIsValid] = React.useState(false);

  React.useEffect(() => {
    if (passwordIsDirty && !passwordError && confirmPassword === password) {
      setPasswordIsValid(true);
      return;
    }

    if (passwordIsDirty && !passwordError && confirmPassword !== password) {
      setPasswordIsValid(false);
    }
  }, [confirmPassword]);

  return { passwordIsValid };
};
