import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core';
import HomePage from './HomePage'

function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3f51b5',
      },
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

const useStyles = makeStyles({
  root: {
  }
})

export default App;
