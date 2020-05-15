import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
  gap: 30px;
  margin: 100px 20px;
`;

const API_URL = 'https://api.pokemontcg.io';
const VERSION = 'v1';
const RESOURCE = 'cards';
const API_ENDPOINT = `${API_URL}/${VERSION}/${RESOURCE}`;

const getPokemons = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState([]);

  useEffect(() => {
    axios.get(API_ENDPOINT).then(res => {
      // console.log(res.data.cards);
      setName(res.data.cards);
      setPage(2);
    });
  }, [page]);

  return (
    <StyledGallery>
      {name.map(item => (
        <div key={item.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.imageUrl} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                <ul>
                  <li>number: {item.number}</li>
                  <li>hp: {item.hp}</li>

                  <li>Supertype: Pokémon</li>
                  <li>Subtype: Stage 2</li>
                  <li>Rarity: Uncommon</li>
                </ul>
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </StyledGallery>
  );
};

export default getPokemons;
