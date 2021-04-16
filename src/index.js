import App from './App';
import GlobalStyle from 'style/globalStyle/index';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import reportWebVitals from './reportWebVitals';
import theme from 'style/theme';

let app = <App />;

// Hook styled-components theme and GlobalStyle
app = (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {app}
  </ThemeProvider>
);

ReactDOM.render(
  <React.StrictMode>{app}</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
