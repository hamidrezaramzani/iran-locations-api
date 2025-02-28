import { Paper } from '@mui/material';
import styled from 'styled-components';

export const DocumentationContent = styled(Paper)`
  background-color: ${({ isDark }) => (isDark ? '#000' : '#efefef')} !important;
  padding: 30px;
  width: 75%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }


  .documentation-content-buttons {
      margin-top:20px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 30px 0;
  }
`;