import React, { useContext } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import PokemonsList from 'components/PokemonCatalog/PokemonsList';
import { InputContext } from 'context/InputContext';

const StyledButton = styled.div`
  position: absolute;
  top: 16%;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Show = () => {
  const { toggle, handleToggle } = useContext(InputContext);

  return (
    <>
      <StyledButton>
        <Button variant="contained" color="primary" onClick={handleToggle}>
          {toggle ? 'Hide' : 'Show'} Cards
        </Button>
      </StyledButton>

      {toggle && <PokemonsList />}
    </>
  );
};

export default Show;
