import Box from 'components/abstract/Box';
import Part from '../../style';
import PropTypes from 'prop-types';
import React from 'react';
import Text from 'components/basic/Text';
import theme from 'style/theme';

const FilledTrackPart = ({
  id,
  color,
  duration,
  name,
  isTrackDraftPlaying,
  isPartBeingPlayed,
  onRemoveSample,
}) => {
  return (
    <Part
      key={id}
      w={`${duration * 20}px`}
      h='100%'
      bgc={color}
      borderRadius='0.8rem'
      p={duration <= 2 ? '0.2rem' : '1rem'}
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      bl={`1px solid ${theme.colors.background5}`}
      position='relative'
    >
      <Text color={theme.colors.white} type='small' containerProps={{ m: '0' }}>
        {duration}s
      </Text>
      <Box alignSelf='center' hidden={!isPartBeingPlayed}>
        &#127925;
      </Box>
      <Text color={theme.colors.white} type='small' containerProps={{ m: '0' }}>
        {name}
      </Text>
      <Box
        top='0'
        right='0.3rem'
        position='absolute'
        pointer
        title='Remove sample'
        onClick={() => onRemoveSample({ droppableId: id })}
        color={theme.colors.white}
        hidden={isTrackDraftPlaying}
      >
        &#x2716;
      </Box>
    </Part>
  );
};

FilledTrackPart.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isTrackDraftPlaying: PropTypes.bool,
  duration: PropTypes.number.isRequired,
  isPartBeingPlayed: PropTypes.bool,
  onRemoveSample: PropTypes.func.isRequired,
};

FilledTrackPart.defaultProps = {
  isTrackDraftPlaying: false,
  isPartBeingPlayed: false,
};

export default FilledTrackPart;
