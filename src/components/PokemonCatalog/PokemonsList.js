import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import PokemonCard from './PokemonCard';

const StyledMargin = styled.div`
  margin-top: 100px;
  text-align: center;
`;
const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin: 0 20px;
  margin-top: 70px;
  margin-bottom: 70px;
  justify-items: center;
`;

const API_URL = 'https://pokeapi.co/api';
const VERSION = 'v2';
const RESOURCE = 'pokemon?limit=20';
const API_ENDPOINT = `${API_URL}/${VERSION}/${RESOURCE}`;

const getPokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [flag, setFlag] = useState(false);
  const [color, setColor] = useState('dark');

  useEffect(() => {
    axios.get(API_ENDPOINT).then(res => {
      setPokemons(res.data.results);
    });
  }, []);

  return (
    <>
      <StyledMargin>
        <BootstrapSwitchButton
          onstyle="dark"
          checked
          width={80}
          onlabel="Dark"
          offlabel="Light"
          onChange={() => {
            setFlag(!flag);
            setColor(flag ? 'dark' : 'light');
          }}
        />
      </StyledMargin>

      <StyledGallery>
        {pokemons.map(item => (
          <PokemonCard key={item.id} name={item.name} url={item.url} theme={color} />
        ))}
      </StyledGallery>
    </>
  );
};

export default getPokemons;
