import PropTypes from 'prop-types';
import theme from 'style/theme';

const PlayIcon = ({ isFocused }) => {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='16'
        cy='16'
        r='16'
        fill={isFocused ? theme.colors.flame : theme.colors.background5}
      />
      <path
        d='M12.875 20.875L13.1172 20.7318L21.125 16L20.375 15.5567L12.875 11.125V20.875Z'
        fill={isFocused ? theme.colors.white : theme.colors.background6}
        stroke={isFocused ? theme.colors.white : theme.colors.background6}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

PlayIcon.propTypes = {
  isFocused: PropTypes.bool,
};

PlayIcon.defaultProps = {
  isFocused: false,
};

export default PlayIcon;
