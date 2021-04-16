import Box from 'components/common/abstract/Box';
import PropTypes from 'prop-types';
import React from 'react';
import TextStyled from './style';

const Text = ({ children, containerProps, ...props }) => {
  return (
    <Box span m='1rem 0' display='block' {...containerProps}>
      <TextStyled {...props}>{children}</TextStyled>
    </Box>
  );
};

Text.propTypes = {
  children: PropTypes.node,
  containerProps: PropTypes.shape({}),
};

Text.defaultProps = {
  children: '',
  containerProps: {},
};

export default Text;
