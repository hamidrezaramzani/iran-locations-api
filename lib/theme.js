import { createTheme } from '@mui/material';

export const getMuiTheme = (state) =>
  createTheme({
    palette: {
      mode: state,
      background: {
        default: state === 'dark' ? '#000000' : '#ffffff',
      },
    },
    typography: {
      fontFamily: 'iran-yekan',
    },
  });
