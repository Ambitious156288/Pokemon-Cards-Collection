import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import Backgroud from 'theme/Background';
import PokemonsList from 'Api/PokemonsList';
import Header from 'components/Header';
import Triangle from 'components/Triangle';
import { InputProvider } from 'context/InputContext';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <InputProvider>
        <Backgroud />
        <Triangle />

        <Header />

        <PokemonsList />
      </InputProvider>
    </ThemeProvider>
  );
};

export default Root;
