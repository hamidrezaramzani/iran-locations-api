import { Paper } from '@mui/material';
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

