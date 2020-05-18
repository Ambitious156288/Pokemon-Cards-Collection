import React from 'react';
import styled from 'styled-components';
import { Navbar, Form, Nav, Button, FormControl } from 'react-bootstrap';
import pokemon from 'assets/pokemon.png';

const StyledImage = styled.img`
  height: 35px;
  width: 50px;
`;

const StyledButton = styled(Button)`
  padding: 0 5px;
`;

const StyledNavbar = styled(Navbar)`
  border-bottom: 1px solid green;
`;

const StyledH2 = styled.h2`
  color: green;
`;

const Header = () => {
  return (
    <>
      <StyledNavbar fixed="top" bg="dark">
        <Nav className="mr-auto">
          <StyledH2>Pokemon Cards Collection</StyledH2>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="search pokemons..." className="mr-sm-2" />
          <StyledButton variant="success">
            <StyledImage src={pokemon} alt="" />
          </StyledButton>
        </Form>
      </StyledNavbar>
    </>
  );
};

export default Header;
