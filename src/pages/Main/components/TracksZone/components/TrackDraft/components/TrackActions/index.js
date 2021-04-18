import { useContext, useEffect, useState } from 'react';

import Box from 'components/abstract/Box';
import { MainContext } from 'pages/Main';
import PropTypes from 'prop-types';
import TextInput from 'components/basic/TextInput';
import assets from 'assets';
import createTestAttribute from 'utils/helpers/createTextAttribute';
import theme from 'style/theme';
import usePlayTrack from 'hooks/usePlayTrack';

const { PlayIcon, PauseIcon } = assets;

const TrackActions = ({ parts }) => {
  const [trackName, setTrackName] = useState('');

  const {
    setCurrentlyPlayingDraftTrackPart,
    isTrackDraftPlaying,
    setIsTrackDraftPlaying,
    onSaveTrack,
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

  const isTrackPlayable = parts.some((part) => part.src);

  const saveTrack = () => {
    if (!isTrackPlayable) return;
    onSaveTrack({
      name: trackName || 'Unnamed Track',
      id: parts[0].id,
      parts,
    });
    setTrackName('');
  };

  const toggleTrackPlaying = () => {
    if (!isTrackPlayable) return;
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
        <TextInput
          containerProps={{
            m: '0 0 0.8rem',
          }}
          placeholder='Track Name'
          onChange={(e) => setTrackName(e.target.value)}
          value={trackName}
          data-test={createTestAttribute({
            page: 'main',
            element: 'input',
            context: 'track-name',
          })}
        />
        <Box
          bgc={theme.colors.background5}
          borderRadius='2.3rem'
          w='fit-content'
          p='0.2rem 1rem'
          onClick={saveTrack}
          cursor={isTrackPlayable ? 'pointer' : 'not-allowed'}
        >
          Save
        </Box>
      </Box>
      <Box
        m='0 0 -0.8rem'
        onClick={toggleTrackPlaying}
        cursor={isTrackPlayable ? 'pointer' : 'not-allowed'}
      >
        {isTrackDraftPlaying ? <PauseIcon /> : <PlayIcon />}
      </Box>
    </Box>
  );
};

TrackActions.propTypes = {
  parts: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string }))
    .isRequired,
};

export default TrackActions;
