import React from 'react';

export const LoadMore: React.FC <any> = ({ loadmore }) => {
  return (
    <button 
      className='load-more'
      onClick={() => {
        loadmore();
      }}
    >
      Завантажити ще
    </button>
  );
};
