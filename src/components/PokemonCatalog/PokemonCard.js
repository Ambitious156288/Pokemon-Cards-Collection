import React, { useState, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Card, Spinner } from 'react-bootstrap';
import { InputContext } from 'context/InputContext';

const StyledCenter = styled.div`
  text-align: center;
`;

const StyledImg = styled.img`
  opacity: 0;
`;

const PokemonCard = ({ name, url, theme }) => {
  const [imageUrl, setImageUrl] = useState([]);
  const [pokemonIndex, setPokemonIndex] = useState([]);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    setPokemonIndex(url.split('/')[6]);
    setImageUrl(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`,
    );
  }, [pokemonIndex]);

  const { inputValue } = useContext(InputContext);

  const singleCard = useRef(null);

  // const hideCards = () => {
  //   singleCard.current.focus();
  //   console.log(singleCard.current.style);
  // };

  return (
    <StyledCenter>
      {name.includes(inputValue) ? (
        <Card
          ref={singleCard}
          id={name}
          bg={theme}
          text={theme === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
        >
          <Card.Header>
            {imageLoading ? (
              <div className="text-center">
                <Spinner animation="border" variant="light" />
              </div>
            ) : null}
            <StyledImg
              src={imageUrl}
              alt="img"
              onLoad={() => setImageLoading(false)}
              style={imageLoading ? null : { opacity: 1 }}
            />
          </Card.Header>
          <Card.Body>
            <Card.Title>#{pokemonIndex} </Card.Title>
            {name.includes(inputValue) ? <Card.Text>{name}</Card.Text> : 'null'}
            <Card.Text>{name}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <div>XXXXX</div>
      )}
    </StyledCenter>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

export default PokemonCard;
