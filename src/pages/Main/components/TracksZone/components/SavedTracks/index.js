import Box from 'components/abstract/Box';
import Text from 'components/basic/Text';
import theme from 'style/theme';

const SavedTracks = () => {
  return (
    <Box m='4rem 0 0 2rem'>
      <Text type='h1' color={theme.colors.text2}>
        Saved Tracks
      </Text>
      <Text type='p' color={theme.colors.text3}>
        You didn’t save any tracks, yet.
      </Text>
    </Box>
  );
};

export default SavedTracks;
