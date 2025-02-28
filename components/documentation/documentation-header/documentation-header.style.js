import { AppBar } from '@mui/material';
import styled from 'styled-components';

export const DocumentationHeader = styled(AppBar)`
  width: 100%;
  padding: 10px 0;
  background: ${({ isDark }) => (isDark ? '#000' : '#efefef')} !important;
  box-shadow: none;
  display: flex;
  justify-content: start;
  .menu-open-button {
    display: none;
  }
  @media screen and (max-width: 768px) {
    .logo {
      display: none;
    }
    .menu-open-button {
      display: block;
      color: ${({ isDark }) => (isDark ? '#fff' : '#242424')} !important;
    }
  }

  .light-icon {
    color: #242424 !important;
  }
`;
