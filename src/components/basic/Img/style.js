import styled from 'styled-components';

const ImgStyled = styled.img`
  height: 100%;
  width: 100%;
  object-fit: ${({ objectFit }) => objectFit};
`;

export default ImgStyled;
