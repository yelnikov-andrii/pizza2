import React from 'react';
import { Select } from './Select';

export const Search: React.FC <any> = ({ searchInput, setSearchInput, options, setSelectedOption, selectedOption }) => {
  return (
    <div className='search'>
      <input
        className='search__input'
        placeholder='Знайти продукт'
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      <div className='search__select'>
        <Select 
          options={options}
          defaultField="Сортувати по"
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
    </div>
  );
};
