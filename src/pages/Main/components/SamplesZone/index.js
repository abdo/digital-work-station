import Box from 'components/abstract/Box';
import React from 'react';
import Text from 'components/basic/Text';
import theme from 'style/theme';

const SamplesZone = () => {
  return (
    <Box
      w='100%'
      h='100%'
      bgc={theme.colors.background2}
      br={`2px solid ${theme.colors.background4}`}
      p='1.6rem'
    >
      <Text
        type='h1'
        color={theme.colors.text2}
        containerProps={{ m: '0 0 0.8rem 0.8rem' }}
      >
        Samples
      </Text>
    </Box>
  );
};

export default SamplesZone;
