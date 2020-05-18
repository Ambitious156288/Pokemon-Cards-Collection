import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const StyledCenter = styled.div`
  text-align: center;
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
      <StyledCenter>
        <>
          <Card
            bg={'Dark'.toLowerCase()}
            text={'Dark'.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
          >
            <Card.Header>
              <img src={imageUrl} alt="img" />
            </Card.Header>
            <Card.Body>
              <Card.Title>#{pokemonIndex} </Card.Title>
              <Card.Text>{name}</Card.Text>
            </Card.Body>
          </Card>
          <br />
        </>
      </StyledCenter>
    </>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default PokemonCard;
