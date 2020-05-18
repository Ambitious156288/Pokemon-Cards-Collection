import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PokemonCard from '../components/PokemonCard';

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  padding: 100px 20px;
`;

const API_URL = 'https://pokeapi.co/api';
const VERSION = 'v2';
const RESOURCE = 'pokemon?limit=150';
const API_ENDPOINT = `${API_URL}/${VERSION}/${RESOURCE}`;

const getPokemons = () => {
  const [pageNext, setPageNext] = useState(1);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get(API_ENDPOINT).then(res => {
      setPokemons(res.data.results);
      setPageNext(2);
    });
  }, [pageNext]);

  return (
    <StyledGallery>
      {pokemons.map(item => (
        <PokemonCard key={item.id} name={item.name} url={item.url} />
      ))}
    </StyledGallery>
  );
};

export default getPokemons;
