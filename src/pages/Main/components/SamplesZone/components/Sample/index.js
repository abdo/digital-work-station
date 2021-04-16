import { useEffect, useState } from 'react';

import Box from 'components/abstract/Box';
import PropTypes from 'prop-types';
import Text from 'components/basic/Text';
import assets from 'assets';
import theme from 'style/theme';

const { PlayIcon, PauseIcon } = assets;

const Sample = ({ sample: { name, src }, isBeingDragged }) => {
  const [audio, setAudio] = useState({});
  const [isAudioPlaying, setisAudioPlaying] = useState(false);

  useEffect(() => {
    setAudio(new Audio(src));
  }, []);

  const toggleAudioPlaying = () => {
    if (isAudioPlaying) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      audio.play();
    }
    setisAudioPlaying((state) => !state);
  };

  return (
    <Box
      bgc={
        isBeingDragged ? theme.colors.flameBackground : theme.colors.background3
      }
      p='0 2.1rem'
      m='0.8rem 0'
      borderRadius='0.8rem'
      h='5.6rem'
      display='flex'
      alignItems='center'
      b={isBeingDragged ? `1px solid ${theme.colors.flame}` : ''}
    >
      <Box onClick={toggleAudioPlaying}>
        {isAudioPlaying ? (
          <PauseIcon />
        ) : (
          <PlayIcon isFocused={isBeingDragged} />
        )}
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
  isBeingDragged: PropTypes.bool,
};

Sample.defaultProps = {
  sample: {},
  isBeingDragged: false,
};

export default Sample;
