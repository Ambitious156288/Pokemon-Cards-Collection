import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetPokemons from 'Api/GetPokemons';
import Header from 'components/atoms/Header';

const Root = () => (
  <>
    <Header />
    <GetPokemons />
  </>
);

export default Root;
