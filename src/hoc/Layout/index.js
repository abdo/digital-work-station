import Box from 'components/common/abstract/Box';
import Header from 'components/Header';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: '',
};

export default Layout;
