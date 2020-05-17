import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Backgroud from 'theme/Background';
import PokemonsList from 'Api/PokemonsList';
import Header from 'components/Header';

const Root = () => (
  <>
    <Backgroud />
    <Header />
    <PokemonsList />
  </>
);

export default Root;
