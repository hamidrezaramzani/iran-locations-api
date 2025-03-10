import { createTheme } from '@mui/material/styles';

export const getMuiTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#7D3C98',
      },
      secondary: {
        main: '#1C39BB',
      },
      success: {
        main: '#00A693',
      },
      error: {
        main: '#CC3333',
      },
      background: {
        default: mode === 'dark' ? '#000' : '#fff',
        paper: mode === 'dark' ? '#121212' : '#f5f5f5',
      },
      text: {
        primary: mode === 'dark' ? '#fff' : '#000',
        secondary: mode === 'dark' ? '#B3B3B3' : '#4A4A4A',
      },
    },
    typography: {
      fontFamily: 'vazir-regular',
    },
  });
