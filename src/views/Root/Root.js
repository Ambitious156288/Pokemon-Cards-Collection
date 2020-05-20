import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import Backgroud from 'theme/Background';
import PokemonsList from 'Api/PokemonsList';
import Header from 'components/Header';

const Root = () => (
  <ThemeProvider theme={theme}>
    <Backgroud />
    <Header />
    <PokemonsList />
  </ThemeProvider>
);

export default Root;
