import Box from 'components/abstract/Box';
import Text from 'components/basic/Text';
import assets from 'assets';
import theme from 'style/theme';

const { PlayIcon } = assets;

const TrackActions = () => {
  return (
    <Box
      w='13rem'
      h='100%'
      p='1.2rem'
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
    >
      <Box>
        <Text containerProps={{ m: '0 0 0.8rem' }}>Track Name</Text>
        <Box
          bgc={theme.colors.background5}
          borderRadius='2.3rem'
          w='fit-content'
          p='0.2rem 1rem'
          pointer
        >
          Save
        </Box>
      </Box>
      <Box pointer m='0 0 -0.8rem'>
        <PlayIcon />
      </Box>
    </Box>
  );
};

export default TrackActions;
