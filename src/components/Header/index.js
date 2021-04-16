import Box from 'components/common/abstract/Box';
import Img from 'components/common/basic/Img';
import Text from 'components/common/basic/Text';
import assets from 'assets';
import theme from 'style/theme';

const { appLogo } = assets;

const Header = () => {
  return (
    <Box
      h='8.5rem'
      w='100%'
      bgc={theme.colors.main}
      p='0 2.2rem'
      display='flex'
      alignItems='center'
    >
      <Img
        src={appLogo}
        alt='app logo'
        containerProps={{ m: '0 1.6rem 0 0' }}
      />
      <Text type='h2' color={theme.colors.white}>
        My Studio
      </Text>
    </Box>
  );
};

export default Header;
