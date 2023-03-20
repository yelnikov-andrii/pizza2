import React from 'react';

export const useChangeBooleanWithTimeSpan = (booleanDefault: boolean, booleanToSet: boolean, time: number) => {
  const [boolean, setBoolean] = React.useState(booleanDefault);

  React.useEffect(() => {
    setTimeout(() => {
      setBoolean(booleanToSet);
    }, time);

  }, [boolean]);

  return [boolean, setBoolean];
};
