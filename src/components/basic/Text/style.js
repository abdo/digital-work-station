import { devices } from 'style/constants';
import styled from 'styled-components';
import theme from 'style/theme';

export const getFontSize = (type) =>
  type === 'x-small'
    ? '0.8rem'
    : type === 'small'
    ? '1rem'
    : type === 'p'
    ? '1.4rem'
    : type === 'h2'
    ? '1.6rem'
    : type === 'h1'
    ? '1.8rem'
    : '1.4rem';

const TextStyled = styled.p`
  font-size: 1.8rem;
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
  line-height: ${({ lh }) => lh};
  font-size: ${({ type }) => getFontSize(type)};
  font-weight: ${({ fw }) =>
    fw === 'regular' ? 400 : fw === 'medium' ? 500 : fw === 'bold' ? 700 : fw};
  text-transform: ${({ textTransform }) => textTransform};
  text-decoration: ${({ textDecoration }) => textDecoration};
  word-break: ${({ wordBreak }) => wordBreak};
  font-family: ${({ titleFont }) => titleFont && theme.fontFamilies.title};
  margin: 0;

  @media ${devices.desktop} {
    font-size: ${({ type, typeD }) => getFontSize(typeD || type)};
  }

  @media ${devices.laptop} {
    font-size: ${({ type, typeL, typeD }) =>
      getFontSize(typeL || typeD || type)};
  }

  @media ${devices.miniLaptop} {
    font-size: ${({ type, typeML, typeL, typeD }) =>
      getFontSize(typeML || typeL || typeD || type)};
  }

  @media ${devices.tablet} {
    font-size: ${({ type, typeT, typeML, typeL, typeD }) =>
      getFontSize(typeT || typeML || typeL || typeD || type)};
  }

  @media ${devices.mobile} {
    font-size: ${({ type, typeM, typeT, typeML, typeL, typeD }) =>
      getFontSize(typeM || typeT || typeML || typeL || typeD || type)};
  }
`;

TextStyled.defaultProps = {
  type: '',
  color: theme.colors.text1,
  textTransform: 'inherit',
  align: 'inherit',
  lh: '1.6rem',
};

export default TextStyled;
