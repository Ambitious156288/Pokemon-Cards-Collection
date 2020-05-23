import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const InputContext = createContext();

const InputProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  const [quantity, setQuantity] = useState(10);

  const handleInput = e => {
    setInputValue(e.target.value);
  };

  const handleQuantity = () => {
    setQuantity(quantity + 10);
  };

  return (
    <InputContext.Provider value={{ inputValue, handleInput, quantity, handleQuantity }}>
      {children}
    </InputContext.Provider>
  );
};

InputProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { InputProvider, InputContext };
