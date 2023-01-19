import React from 'react';

export const useGetPrevProps = (value: any) => {
  const ref = React.useRef<any>();
  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};