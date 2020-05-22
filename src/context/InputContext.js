import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const InputContext = createContext();

const InputProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = e => {
    setInputValue(e.target.value);
  };

  return (
    <InputContext.Provider value={{ inputValue, handleInput }}>{children}</InputContext.Provider>
  );
};

InputProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { InputProvider, InputContext };
