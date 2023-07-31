import React from 'react';

export const Select: React.FC <any> = ({ options, defaultField, setSelectedOption, selectedOption }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (e: any) => {
    if (!e.target.closest('.select')) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='select'>
      <button 
        onClick={toggleDropdown} 
        className='select__button'
      >
        {!selectedOption ? defaultField : selectedOption}
      </button>
      {isOpen && (
        <ul className='select__dropdown'>
          {options.map((option: string) => (
            <li 
              key={option} 
              onClick={() => handleOptionSelect(option)}
              className='select__dropdownItem'
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

