import Box from 'components/abstract/Box';
import styled from 'styled-components';

const Part = styled(Box)`
  user-select: none;

  :last-of-type {
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
  }
`;

export default Part;
