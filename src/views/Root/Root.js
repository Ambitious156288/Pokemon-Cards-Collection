import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Backgroud from 'theme/Background';
import GetPokemons from 'Api/GetPokemons';
import Header from 'components/Header';

const Root = () => (
  <>
    <Backgroud />
    <Header />
    <GetPokemons />
  </>
);

export default Root;
