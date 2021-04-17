import Box from 'components/abstract/Box';
import PropTypes from 'prop-types';
import React from 'react';
import TextInputStyled from './style';

const TextInput = ({ containerProps, ...props }) => {
  return (
    <Box span m='1rem 0' display='block' {...containerProps}>
      <TextInputStyled {...props} />
    </Box>
  );
};

TextInput.propTypes = {
  containerProps: PropTypes.shape({}),
};

TextInput.defaultProps = {
  containerProps: {},
};

export default TextInput;
