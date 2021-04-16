import Box from 'components/abstract/Box';
import SamplesZone from './components/SamplesZone';
import TracksZone from './components/TracksZone';
import { headerHeight } from 'components/Header';

const Main = () => {
  const minPageHeight = `calc(100vh - ${headerHeight})`;

  return (
    <Box minH={minPageHeight} display='flex'>
      <Box w='35%' minH={minPageHeight}>
        <SamplesZone />
      </Box>
      <Box w='fill-available' minH={minPageHeight}>
        <TracksZone />
      </Box>
    </Box>
  );
};

export default Main;
