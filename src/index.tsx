import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  CssBaseline,
  responsiveFontSizes,
  StyledEngineProvider,
} from '@mui/material';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { ThemeProvider as ScThemeProvider } from 'styled-components';

import RalewayExtraLightTTF from './assets/fonts/Raleway/Raleway-ExtraLight.ttf';
import RalewayLightTTF from './assets/fonts/Raleway/Raleway-Light.ttf';
import RalewayRegularTTF from './assets/fonts/Raleway/Raleway-Regular.ttf';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: ['Raleway'].join(''),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
          font-weight: 200;
          src: local('Raleway'), local('Raleway-Extra-Light'), url(${RalewayExtraLightTTF}) format('truetype');
        },
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
          font-weight: 300;
          src: local('Raleway'), local('Raleway-Light'), url(${RalewayLightTTF}) format('truetype');
        },
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Raleway'), local('Raleway-Regular'), url(${RalewayRegularTTF}) format('truetype');
        },
      `,
      },
    },
    palette: {
      primary: {
        main: '#4CAF50',
        contrastText: '#FFF',
      },
      secondary: {
        main: '#3D3D3D',
        contrastText: '#FFF',
      },
      yellow: {
        main: '#FFAD1D',
        contrastText: '#FFF',
      },
      contrastThreshold: 4.5,
    },
  })
);

root.render(
  // <React.StrictMode>
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <ScThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ScThemeProvider>
    </ThemeProvider>
  </StyledEngineProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
