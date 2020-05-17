import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
  gap: 30px;
  margin: 100px 20px;
`;

const PokemonCard = ({ name, url }) => {
  const [imageUrl, setImageUrl] = useState([]);
  const [pokemonIndex, setPokemonIndex] = useState([]);

  useEffect(() => {
    setPokemonIndex(url.split('/')[6]);
    setImageUrl(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`,
    );
  }, [pokemonIndex]);

  return (
    <>
      <StyledGallery>
        <div>
          <img src={imageUrl} alt="img" />

          <Card border="dark" style={{ width: '18rem' }}>
            <Card.Header>
              {pokemonIndex}:{name}
            </Card.Header>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>{`https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </StyledGallery>
    </>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default PokemonCard;
