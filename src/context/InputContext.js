import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const InputContext = createContext();

const InputProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  const [quantity, setQuantity] = useState(10);
  const [counter, setCounter] = useState(0);

  // /////////////////// /////////////////// /////////////////// /////////////////
  const API_URL = 'https://pokeapi.co/api';
  const VERSION = 'v2';
  const RESOURCE = 'pokemon?limit=';
  const API_ENDPOINT = `${API_URL}/${VERSION}/${RESOURCE}${quantity}`;

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get(API_ENDPOINT).then(res => {
      setPokemons(res.data.results);
    });
  }, [pokemons]);

  // ///////////////////// /////////////////// /////////////////// /////////////////

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
      value={{ inputValue, handleInput, quantity, handleQuantity, counter, pokemons }}
    >
      {children}
    </InputContext.Provider>
  );
};

InputProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { InputProvider, InputContext };
