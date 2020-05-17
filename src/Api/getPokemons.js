import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
  gap: 30px;
  margin: 100px 20px;
`;

const API_URL = 'https://pokeapi.co/api';
const VERSION = 'v2';
const RESOURCE = 'pokemon';
const API_ENDPOINT = `${API_URL}/${VERSION}/${RESOURCE}`;

const getPokemons = () => {
  // const [pageSize, setPageSize] = useState(6);

  const [currentPage, setCurrentPage] = useState(1);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get(API_ENDPOINT).then(res => {
      // console.log(res.data.results);
      setPokemons(res.data.results);
      setCurrentPage(2);
    });
  }, [currentPage]);

  return (
    <>
      <StyledGallery>
        {pokemons.map((item, number) => (
          <div key={item.id}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number +
                1}.png`}
              alt="img"
            />
            <Card border="dark" style={{ width: '18rem' }}>
              <Card.Header>{`#${number + 1}`}</Card.Header>
              <Card.Body>
                <Card.Title>Dark Card Title</Card.Title>
                <Card.Text>
                  dsadsa
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number +
                      1}.png`}
                    alt="img"
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </StyledGallery>
    </>
  );
};

export default getPokemons;
