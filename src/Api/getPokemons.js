import React, { useState, useEffect } from 'react';
import axios from 'axios';

const getPokemons = () => {
  const [page, setPage] = useState();
  const [name, setName] = useState([]);

  useEffect(() => {
    axios.get('https://api.pokemontcg.io/v1/cards').then(res => {
      // console.log(res.data.cards);
      setName(res.data.cards);
      setPage(1);
    });
  }, [page]);

  return (
    <div>
      {name.map(item => (
        <li>{item.name}</li>
      ))}
    </div>
  );
};

export default getPokemons;
