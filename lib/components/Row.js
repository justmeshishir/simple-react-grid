import React from 'react';
import styled from 'styled-components';

const Row = styled.div` 
  &::after {
    content: '';
    display: table;
    clear: both;
  }
`;

export default Row;