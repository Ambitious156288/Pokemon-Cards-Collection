import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import Triangle from 'components/Header/Triangle';
import Input from 'components/Header/Input';

const StyledNavbar = styled(Navbar)`
  border-bottom: 2px solid ${({ theme }) => theme.black};
  box-shadow: 0px 0.5px 5px ${({ theme }) => theme.green};
`;

const StyledH2 = styled.h2`
  color: ${({ theme }) => theme.black};
  font-weight: bold;
  letter-spacing: 3px;
  text-shadow: 0px 1px 1px ${({ theme }) => theme.green};
`;

const Header = () => {
  return (
    <>
      <Triangle />
      <StyledNavbar fixed="top" bg="dark">
        <Nav className="mr-auto">
          <StyledH2>Pokemon Cards Collection</StyledH2>
        </Nav>

        <Input />
      </StyledNavbar>
    </>
  );
};

export default Header;
