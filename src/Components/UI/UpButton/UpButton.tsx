import React from 'react';

export const UpButton = () => {
  function scroll() {
    window.scrollTo(0, 0);
  }
  return (
    <div className='up-button'>
      <button 
        onClick={() => {
          scroll();
        }}
        className='up-button__button'
      >
        Нагору &#11165;
      </button>
    </div>
  );
};
