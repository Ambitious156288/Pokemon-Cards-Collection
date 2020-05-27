import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const InputContext = createContext();

const InputProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  const [quantity, setQuantity] = useState(10);
  const [counter, setCounter] = useState(0);

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleInput = e => {
    setInputValue(e.target.value);
  };

  const handleQuantity = () => {
    setQuantity(quantity + 10);
    setCounter(counter + 1);
    if (counter === 2) setQuantity(quantity + 120);
  };

  return (
    <InputContext.Provider
      value={{
        inputValue,
        handleInput,
        quantity,
        handleQuantity,
        counter,
        toggle,
        handleToggle,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};

InputProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { InputProvider, InputContext };
