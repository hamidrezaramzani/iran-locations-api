import { StylesProvider } from '@mui/styles';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { getMuiTheme } from '../../lib/theme';
import { ThemeProviderProps } from './theme-provider.type';
import { useContext } from 'react';
import { ColorModeContext, ColorModeType } from '../color-mode-provider';
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { state } = useContext(ColorModeContext);
  const theme = getMuiTheme(state as ColorModeType);
  return (
    <StylesProvider>
      <MuiThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </StyledThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};
