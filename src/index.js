import React from 'react';
import ReactDOM from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from "@material-ui/core/styles";

import App from './components/App';

const theme = createMuiTheme({
  shape: {
    borderRadius: 0,
  },
});

const container = document.getElementById('root');

ReactDOM.render( 
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App/>
  </ThemeProvider>,
  container
);
