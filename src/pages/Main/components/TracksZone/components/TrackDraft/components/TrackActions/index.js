import { useContext, useEffect } from 'react';

import Box from 'components/abstract/Box';
import { MainContext } from 'pages/Main';
import PropTypes from 'prop-types';
import Text from 'components/basic/Text';
import assets from 'assets';
import theme from 'style/theme';
import usePlayTrack from 'hooks/usePlayTrack';

const { PlayIcon, PauseIcon } = assets;

const TrackActions = ({ parts }) => {
  const {
    setCurrentlyPlayingDraftTrackPart,
    isTrackDraftPlaying,
    setIsTrackDraftPlaying,
  } = useContext(MainContext);

  const {
    playTrack,
    pauseTrack,
    isPlaying,
    currentlyPlayingPart,
  } = usePlayTrack({
    parts,
    id: 'draft-track',
  });

  useEffect(() => {
    setIsTrackDraftPlaying(isPlaying);
  }, [isPlaying]);

  useEffect(() => {
    setCurrentlyPlayingDraftTrackPart(currentlyPlayingPart);
  }, [currentlyPlayingPart]);

  const toggleTrackPlaying = () => {
    if (isTrackDraftPlaying) {
      pauseTrack();
    } else {
      playTrack();
    }
  };

  return (
    <Box
      w='13rem'
      h='100%'
      p='1.2rem'
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
    >
      <Box>
        <Text
          containerProps={{
            m: '0 0 0.8rem',
          }}
        >
          Track Name
        </Text>
        <Box
          bgc={theme.colors.background5}
          borderRadius='2.3rem'
          w='fit-content'
          p='0.2rem 1rem'
          pointer
        >
          Save
        </Box>
      </Box>
      <Box pointer m='0 0 -0.8rem' onClick={toggleTrackPlaying}>
        {isTrackDraftPlaying ? <PauseIcon /> : <PlayIcon />}
      </Box>
    </Box>
  );
};

TrackActions.propTypes = {
  parts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default TrackActions;
