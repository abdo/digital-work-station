import { createContext, useEffect, useState } from 'react';

import Box from 'components/abstract/Box';
import SamplesZone from './components/SamplesZone';
import TracksZone from './components/TracksZone';
import { headerHeight } from 'components/Header';
import localStorageConstants from 'constants/localStorage';
import theme from 'style/theme';

const { SAVED_TRACKS_REFERENCE } = localStorageConstants;

export const MainContext = createContext(null);

const Main = () => {
  const [currentlyPlayingAudio, setCurrentlyPlayingAudio] = useState({});
  const [
    currentlyPlayingDraftTrackPart,
    setCurrentlyPlayingDraftTrackPart,
  ] = useState(null);
  const [isTrackDraftPlaying, setIsTrackDraftPlaying] = useState(false);
  const [savedTracks, setSavedTracks] = useState([]);

  useEffect(() => {
    const previouslySavedTracks = JSON.parse(
      localStorage.getItem(SAVED_TRACKS_REFERENCE)
    );

    if (previouslySavedTracks) {
      setSavedTracks(previouslySavedTracks);
    }
  }, []);

  const onSaveTrack = (newTrack) => {
    const newTracks = [newTrack, ...savedTracks];
    setSavedTracks(newTracks);
    localStorage.setItem(SAVED_TRACKS_REFERENCE, JSON.stringify(newTracks));
  };

  const minPageHeight = `calc(100vh - ${headerHeight})`;

  return (
    <MainContext.Provider
      value={{
        currentlyPlayingAudio,
        setCurrentlyPlayingAudio,
        currentlyPlayingDraftTrackPart,
        setCurrentlyPlayingDraftTrackPart,
        isTrackDraftPlaying,
        setIsTrackDraftPlaying,
        savedTracks,
        onSaveTrack,
      }}
    >
      <Box minH={minPageHeight} display='flex' flexDirectionT='column'>
        <Box
          w='35%'
          wt='100%'
          minH={minPageHeight}
          bgc={theme.colors.background2}
        >
          <SamplesZone />
        </Box>
        <Box w='fill-available' minH={minPageHeight}>
          <TracksZone />
        </Box>
      </Box>
    </MainContext.Provider>
  );
};

export default Main;
