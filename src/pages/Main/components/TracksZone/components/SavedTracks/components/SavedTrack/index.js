import Box from 'components/abstract/Box';
import PropTypes from 'prop-types';
import Text from 'components/basic/Text';
import assets from 'assets';
import theme from 'style/theme';
import usePlayTrack from 'hooks/usePlayTrack';

const { PlayIcon, PauseIcon } = assets;

const SavedTrack = ({ track: { name, id, parts } }) => {
  const { playTrack, pauseTrack, isPlaying } = usePlayTrack({
    parts,
    id,
  });

  const toggleAudioPlaying = () => {
    if (isPlaying) {
      pauseTrack();
    } else {
      playTrack();
    }
  };

  return (
    <Box
      bgc={theme.colors.background3}
      p='0 2.1rem'
      m='0.8rem 0'
      w='40.8rem'
      wt='25rem'
      overflow='auto'
      borderRadius='0.8rem'
      h='5.6rem'
      display='flex'
      alignItems='center'
      onClick={toggleAudioPlaying}
      pointer
    >
      <Box m='0 0 -0.8rem 0'>{isPlaying ? <PauseIcon /> : <PlayIcon />}</Box>
      <Text type='p' containerProps={{ m: '0 0 0 1.2rem' }}>
        {name}
      </Text>
    </Box>
  );
};

SavedTrack.propTypes = {
  track: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    parts: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default SavedTrack;
