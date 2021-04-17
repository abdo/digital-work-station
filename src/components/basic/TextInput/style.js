import styled from 'styled-components';

const TextInput = styled.input`
  border: none;
  width: 100%;
  overflow: scroll;
  font-size: 1rem;
  min-height: 2rem;
  background-color: ${({ theme }) => theme.colors.background2};

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.text1};
    font-size: 1.4rem;
  }
`;

export default TextInput;
