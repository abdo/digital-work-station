import BoxStyled from './style';
import PropTypes from 'prop-types';
import React from 'react';

const Box = ({ children, span, ...props }) => {
  return (
    <BoxStyled as={span ? 'span' : 'div'} $span={span} {...props}>
      {children}
    </BoxStyled>
  );
};

Box.propTypes = {
  children: PropTypes.node,
  span: PropTypes.bool,
};

Box.defaultProps = {
  children: '',
  span: false,
};

export default Box;
