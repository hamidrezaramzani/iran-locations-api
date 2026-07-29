import 'styled-components';
import { Theme } from '@mui/material/styles';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
