import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { InputContext } from 'context/InputContext';
import { Button } from 'react-bootstrap';
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

const StyledCenter = styled.div`
  text-align: center;
  margin: 100px;
`;

const getPokemons = () => {
  const { quantity, handleQuantity, counter, inputValue } = useContext(InputContext);

  const API_URL = 'https://pokeapi.co/api';
  const VERSION = 'v2';
  const RESOURCE = 'pokemon?limit=';
  const API_ENDPOINT = `${API_URL}/${VERSION}/${RESOURCE}${quantity}`;

  const [pokemons, setPokemons] = useState([]);
  const [flag, setFlag] = useState(false);
  const [color, setColor] = useState('dark');

  useEffect(() => {
    axios.get(API_ENDPOINT).then(res => {
      setPokemons(res.data.results);
    });
  }, [pokemons]);

  return (
    <>
      <StyledMargin>
        <BootstrapSwitchButton
          onstyle="dark"
          width={160}
          onlabel=" Dark Cards"
          offlabel=" Light Cards"
          onChange={() => {
            setColor(flag ? 'dark' : 'light');
            setFlag(!flag);
          }}
        />
      </StyledMargin>

      <StyledGallery>
        {pokemons.map(
          item =>
            item.name.includes(inputValue) && (
              <PokemonCard key={item.id} name={item.name} url={item.url} theme={color} />
            ),
        )}
      </StyledGallery>
      <StyledCenter>
        {counter === 3 ? null : (
          <Button size="lg" variant="warning" onClick={handleQuantity}>
            {counter === 2 ? 'show all' : 'load more'}
          </Button>
        )}
      </StyledCenter>
    </>
  );
};

export default getPokemons;
