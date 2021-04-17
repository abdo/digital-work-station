import { createContext, useState } from 'react';

import Box from 'components/abstract/Box';
import SamplesZone from './components/SamplesZone';
import TracksZone from './components/TracksZone';
import { headerHeight } from 'components/Header';

export const MainContext = createContext(null);

const Main = () => {
  const [currentlyPlayingAudio, setCurrentlyPlayingAudio] = useState({});
  const [
    currentlyPlayingDraftTrackPart,
    setCurrentlyPlayingDraftTrackPart,
  ] = useState(null);
  const [isTrackDraftPlaying, setIsTrackDraftPlaying] = useState(false);

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
      }}
    >
      <Box minH={minPageHeight} display='flex'>
        <Box w='35%' minH={minPageHeight}>
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
