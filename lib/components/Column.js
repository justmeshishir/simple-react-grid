import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Column = styled.div`
  float: left;

  ${({ sm }) => (sm ? getWidthStyle(sm): 'width: 100%')};

  @media only screen and (min-width: 768px) {
    ${({ md }) => md && getWidthStyle(md)};
  }

  @media only screen and (min-width: 992px) {
    ${({ lg }) => lg && getWidthStyle(lg)};
  }
`;

let getWidthStyle = (size) => {
  if(!size) return;
  return `width: ${ size / 12 * 100 }%;`;
}

Column.propTypes = {
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string
};

export default Column;