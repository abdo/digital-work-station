import Box from 'components/abstract/Box';
import Part from '../../style';
import PropTypes from 'prop-types';
import React from 'react';
import Text from 'components/basic/Text';
import theme from 'style/theme';

const EmptyTrackPart = ({
  events,
  isOver,
  draggedSampleDuration,
  parts,
  index,
  isPartBeingPlayed,
}) => {
  return (
    <Part
      {...events}
      w={
        isOver
          ? `${draggedSampleDuration * 20}px`
          : `${(1 / parts.length) * 100}%`
      }
      h={isOver ? '90%' : '100%'}
      bl={
        parts?.[index - 1]?.src ? '' : `1px solid ${theme.colors.background5}`
      }
      bgc={isOver ? theme.colors.background5 : theme.colors.background3}
      borderRadius={isOver ? '0.8rem' : ''}
      display='flex'
    >
      <Box alignSelf='center' hidden={!isPartBeingPlayed} m='0 auto'>
        &#127925;
      </Box>
      <Box hidden={!(isOver && draggedSampleDuration)}>
        <Text
          type='small'
          color={theme.colors.flame}
          containerProps={{ m: '0.3rem' }}
        >
          {draggedSampleDuration}s
        </Text>
      </Box>
    </Part>
  );
};

EmptyTrackPart.propTypes = {
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
    })
  ).isRequired,
  events: PropTypes.shape({}).isRequired,
  isOver: PropTypes.bool,
  draggedSampleDuration: PropTypes.number,
  index: PropTypes.number.isRequired,
  isPartBeingPlayed: PropTypes.bool,
};

EmptyTrackPart.defaultProps = {
  isOver: false,
  isPartBeingPlayed: false,
  draggedSampleDuration: 2,
};

export default EmptyTrackPart;
