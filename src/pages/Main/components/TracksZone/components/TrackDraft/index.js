import Box from 'components/abstract/Box';
import TrackActions from './components/TrackActions';
import theme from 'style/theme';
import { useState } from 'react';

const TrackDraft = () => {
  const [parts] = useState(
    Array.from(new Array(25), () => ({
      id: Math.random().toString(),
      name: 'blank',
      duration: 2,
    }))
  );

  return (
    <Box
      bgc={theme.colors.background2}
      borderRadius='0.8rem'
      h='14rem'
      w='100%'
      display='flex'
      overflow='hidden'
    >
      <TrackActions />
      <Box w='100%' h='100%' display='flex'>
        {parts.map(() => (
          <Box
            w={`${(1 / 25) * 100}%`}
            h='100%'
            bgc={theme.colors.background3}
            bl={`1px solid ${theme.colors.background5}`}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TrackDraft;
