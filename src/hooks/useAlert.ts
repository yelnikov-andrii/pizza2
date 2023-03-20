import React from 'react';

export const useAlert = () => {
  const [show, setShow] = React.useState(false);

  const timerId: any = React.useRef();

  function showAlert() {
    if (show === true) {
      setShow(true);
      clearInterval(timerId.current);
      timerId.current = setTimeout(() => {
        setShow(false);
      }, 2000);
      return;
    }

    setShow(true);
    timerId.current = setTimeout(() => {
      setShow(false);
    }, 2000);
  }

  return { show, showAlert};
};
