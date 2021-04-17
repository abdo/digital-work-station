import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ::selection {
    background: ${({ theme }) => theme.colors.background1};
  }

  body,html {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 0.3rem;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.text2}; 
    }
    
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.text3}; 
      border-radius: 0.3rem;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.text4};
    }
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${({ theme }) =>
      theme.fontFamilies.main}, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.colors.text1};
    background-color: ${({ theme }) => theme.colors.main};
    line-height: 21px;
    font-size: 1.4rem;

    ::-webkit-scrollbar {
      width: 1.5rem;
    }
    
    ::-webkit-scrollbar-thumb {
      border-radius: 1rem;
    }
  }
  

`;

export default GlobalStyle;
