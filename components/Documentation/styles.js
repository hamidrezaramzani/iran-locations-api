import { AppBar, Paper, Typography } from '@mui/material';
import styled from 'styled-components';

export const DocumentationHierarchy = styled(Paper)`
  width: 25%;
  height: calc(100vh - 100px);
  padding: 20px;
  background: ${({ isDark }) => (isDark ? '#000' : '#efefef')} !important;


  .tree-item-parent {
    margin: 10px 0;
    .MuiTreeItem-label {
      font-size: 15px;
    }
  }

  .tree-item-child {
    margin: 5px 0;
    .MuiTreeItem-label {
      font-size: 15px;
      font-size: 13px;
    }
  }

  .drawer-open-button {
    display: none;
  }
  @media screen and (max-width: 768px) {
    position: relative;
    width: 0;
    display: none !important;

    .drawer-open-button {
      display: block;
      position: absolute;
      top: -30px;
      margin-bottom: 20px;
    }
  }
`;

export const DocumentationCode = styled.div`
  position: relative;
  .copy-button {
    position: absolute;
    top: 5px;
    right: 5px;
  }

  .copy-button-icon {
    font-size: 20px;
  }
`;

export const HeaderContainer = styled(AppBar)`
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

export const HeaderText = styled(Typography)`
  color: #2b3de2;
  flex-grow: 1;
  text-align: center;
  font-weight: bold;
`;

export const DocumentationContent = styled(Paper)`
  background-color: ${({ isDark }) => (isDark ? '#000' : '#efefef')} !important;
  padding: 30px;
  width: 75%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
