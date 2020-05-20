import React from 'react';
import styled from 'styled-components';

const StyledTriangle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 0;
  height: 0;
  border-left: 400px solid transparent;
  border-right: 400px solid transparent;
  border-top: 180px solid ${({ theme }) => theme.green};
`;

const Triangle = () => <StyledTriangle />;

export default Triangle;
