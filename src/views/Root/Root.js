import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import Backgroud from 'theme/Background';
import Header from 'components/Header/Header';
import { InputProvider } from 'context/InputContext';
import Show from 'components/PokemonCatalog/Show';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <InputProvider>
        <Backgroud />
        <Header />

        <Show />
      </InputProvider>
    </ThemeProvider>
  );
};

export default Root;
