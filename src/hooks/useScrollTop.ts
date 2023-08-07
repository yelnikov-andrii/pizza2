import React from 'react';
import { useResolvedPath } from 'react-router-dom';

export const useScrollTop = () => {
  const { pathname } = useResolvedPath('/');

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

};