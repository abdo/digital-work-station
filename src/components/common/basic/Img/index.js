import Box from 'components/common/abstract/Box';
import ImgStyled from './style';
import PropTypes from 'prop-types';
import React from 'react';

const Img = ({ containerProps, ...props }) => {
  return (
    <Box span userSelect='none' {...containerProps}>
      <ImgStyled alt='preview' {...props} />
    </Box>
  );
};

Img.propTypes = {
  containerProps: PropTypes.shape({}),
};

Img.defaultProps = {
  containerProps: {},
};

export default Img;
