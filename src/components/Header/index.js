import Box from 'components/abstract/Box';
import Img from 'components/basic/Img';
import Text from 'components/basic/Text';
import assets from 'assets';
import theme from 'style/theme';

const { appLogo } = assets;

export const headerHeight = '8.5rem';

const Header = () => {
  return (
    <Box
      h={headerHeight}
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
