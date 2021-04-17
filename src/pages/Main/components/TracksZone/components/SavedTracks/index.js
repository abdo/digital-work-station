import Box from 'components/abstract/Box';
import { MainContext } from 'pages/Main';
import SavedTrack from './components/SavedTrack';
import Text from 'components/basic/Text';
import theme from 'style/theme';
import { useContext } from 'react';

const SavedTracks = () => {
  const { savedTracks } = useContext(MainContext);

  return (
    <Box m='4rem 0 0 2rem'>
      <Text type='h1' color={theme.colors.text2}>
        Saved Tracks
      </Text>
      {savedTracks.length === 0 ? (
        <Text type='p' color={theme.colors.text3}>
          You didn’t save any tracks, yet.
          <br />
          <br />
          Drag and drop samples into the track timeline to start.
        </Text>
      ) : (
        savedTracks.map((track) => <SavedTrack key={track.id} track={track} />)
      )}
    </Box>
  );
};

export default SavedTracks;
