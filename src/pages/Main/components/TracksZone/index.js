import Box from 'components/abstract/Box';
import SavedTracks from './components/SavedTracks';
import TrackDraft from './components/TrackDraft';
import theme from 'style/theme';

const TracksZone = () => {
  return (
    <Box w='100%' h='100%' bgc={theme.colors.background1} p='2.4rem 1.2rem'>
      <TrackDraft />
      <SavedTracks />
    </Box>
  );
};

export default TracksZone;
