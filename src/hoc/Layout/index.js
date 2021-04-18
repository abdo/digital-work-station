import Box from 'components/abstract/Box';
import Header from 'components/Header';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <Box>
      <header>
        <Header />
      </header>
      <main>{children}</main>
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
