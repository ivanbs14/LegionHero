import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';

import { Routes } from "./routes";
import { Footer } from './components/Footer';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <Routes />
        <Footer />
    </ThemeProvider>
  </React.StrictMode>,
)
