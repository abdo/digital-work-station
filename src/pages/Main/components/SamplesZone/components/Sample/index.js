import { useContext, useEffect, useState } from 'react';

import Box from 'components/abstract/Box';
import { MainContext } from 'pages/Main';
import PropTypes from 'prop-types';
import Text from 'components/basic/Text';
import assets from 'assets';
import createTestAttribute from 'utils/helpers/createTextAttribute';
import theme from 'style/theme';

const { PlayIcon, PauseIcon } = assets;

const Sample = ({ sample: { name, src }, isDragging }) => {
  const [audio, setAudio] = useState({});
  const [isAudioPlaying, setisAudioPlaying] = useState(false);
  const { currentlyPlayingAudio, setCurrentlyPlayingAudio } = useContext(
    MainContext
  );

  const playAudio = () => {
    audio.play();
    setCurrentlyPlayingAudio(audio);
    setisAudioPlaying(true);
  };

  const pauseAudio = () => {
    audio.pause?.();
    audio.currentTime = 0;
    setisAudioPlaying(false);
  };

  const toggleAudioPlaying = () => {
    if (isAudioPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  useEffect(() => {
    const music = new Audio(src);
    music.onended = () => {
      setisAudioPlaying(false);
    };
    setAudio(music);
  }, []);

  useEffect(() => {
    if (currentlyPlayingAudio.src !== audio.src) {
      pauseAudio();
    }
  }, [currentlyPlayingAudio]);

  return (
    <Box
      bgc={isDragging ? theme.colors.flameBackground : theme.colors.background3}
      p='0 2.1rem'
      m='0.8rem 0'
      minW='20vw'
      borderRadius='0.8rem'
      h='5.6rem'
      display='flex'
      alignItems='center'
      b={isDragging ? `1px solid ${theme.colors.flame}` : ''}
      onClick={toggleAudioPlaying}
      data-test={createTestAttribute({
        page: 'main',
        element: 'div',
        context: 'audio-sample',
      })}
      pointer
    >
      <Box m='0 0 -0.8rem 0' id={isAudioPlaying ? 'pause-icon' : 'play-icon'}>
        {isAudioPlaying ? <PauseIcon /> : <PlayIcon isFocused={isDragging} />}
      </Box>
      <Text type='p' containerProps={{ m: '0 0 0 1.2rem' }}>
        {name}
      </Text>
    </Box>
  );
};

Sample.propTypes = {
  sample: PropTypes.shape({
    name: PropTypes.string,
    src: PropTypes.string,
  }),
  isDragging: PropTypes.bool,
};

Sample.defaultProps = {
  sample: {},
  isDragging: false,
};

export default Sample;
