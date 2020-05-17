import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';

const API_URL = 'https://pokeapi.co/api';
const VERSION = 'v2';
const RESOURCE = 'pokemon';
const API_ENDPOINT = `${API_URL}/${VERSION}/${RESOURCE}`;

const getPokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get(API_ENDPOINT).then(res => {
      setPokemons(res.data.results);
    });
  }, [pokemons]);

  return (
    <div>
      {pokemons.map(item => (
        <PokemonCard key={item.id} name={item.name} url={item.url} />
      ))}
    </div>
  );
};

export default getPokemons;
