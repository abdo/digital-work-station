import { useContext, useEffect, useState } from 'react';

import Box from 'components/abstract/Box';
import { MainContext } from 'pages/Main';
import PropTypes from 'prop-types';
import Text from 'components/basic/Text';
import assets from 'assets';
import theme from 'style/theme';

const { PlayIcon, PauseIcon } = assets;

const TrackActions = ({ parts }) => {
  const {
    currentlyPlayingAudio: currentlyGlobalPlayingAudio,
    setCurrentlyPlayingAudio: setCurrentlyGlobalPlayingAudio,
    setCurrentlyPlayingDraftTrackPart,
    isTrackDraftPlaying,
    setIsTrackDraftPlaying,
  } = useContext(MainContext);

  const [currentlyPlayingAudio, setCurrentlyPlayingAudio] = useState(null);

  const pauseTrack = () => {
    setIsTrackDraftPlaying(false);
    if (currentlyPlayingAudio) {
      currentlyPlayingAudio.pause();
    }
    setCurrentlyPlayingAudio(null);
    setCurrentlyPlayingDraftTrackPart(null);
  };

  const playTrack = () => {
    setIsTrackDraftPlaying(true);
    setCurrentlyGlobalPlayingAudio({ src: 'track' });

    const playPart = ({ part, index }) => {
      const playNextPart = () => {
        // To get updated state
        setIsTrackDraftPlaying((currentIsTrackDraftPlaying) => {
          if (currentIsTrackDraftPlaying) {
            if (index + 1 <= parts.length - 1) {
              playPart({
                part: parts[index + 1],
                index: index + 1,
              });
            } else {
              pauseTrack();
            }
          }
          return currentIsTrackDraftPlaying;
        });
      };

      setCurrentlyPlayingDraftTrackPart(part);
      if (part.src) {
        const partAudio = new Audio(part.src);
        setCurrentlyPlayingAudio(partAudio);
        partAudio.play();
        partAudio.onended = () => {
          playNextPart();
        };
      } else {
        setCurrentlyPlayingAudio(null);
        setTimeout(() => {
          playNextPart();
        }, part.duration * 1000);
      }
    };

    playPart({ part: parts[0], index: 0 });
  };

  const toggleTrackPlaying = () => {
    if (isTrackDraftPlaying) {
      pauseTrack();
    } else {
      playTrack();
    }
  };

  useEffect(() => {
    if (currentlyGlobalPlayingAudio.src !== 'track') {
      pauseTrack();
    }
  }, [currentlyGlobalPlayingAudio]);

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
