import { Paper } from '@mui/material';
import styled from 'styled-components';
import { SCDocumentationContentProps } from './documentation-content.type';

export const DocumentationContent = styled(Paper) <SCDocumentationContentProps>`
  background-color: ${({ isDark }) => (isDark ? '#000' : '#efefef')} !important;
  padding: 30px;
  width: 75%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  .documentation-content-buttons {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
  }

  .documentation-content-markdown {
    table {
      border-collapse: separate;
      border-spacing: 0;
      width: 100%;
      margin: 1rem 0;
      border-radius: 8px;
      border: 1px solid ${({ isDark }) => isDark
    ? 'rgba(255, 255, 255, 0.12)'
    : 'rgba(0, 0, 0, 0.12)'};
      overflow: hidden;
      text-align: center;
    }

    th {
      background-color: ${({ isDark, theme }) => isDark
    ? `${theme.palette.primary.dark}`
    : `${theme.palette.primary.light}`};
      color: ${({ isDark, theme }) => isDark
    ? theme.palette.common.white
    : theme.palette.common.black};
      font-weight: 600;
      text-align: center;
      padding: 12px 16px;
      border-bottom: 1px solid ${({ isDark }) => isDark
    ? 'rgba(255, 255, 255, 0.12)'
    : 'rgba(0, 0, 0, 0.12)'};
    }

    td {
      padding: 12px 16px;
      border-bottom: 1px solid ${({ isDark }) => isDark
    ? 'rgba(255, 255, 255, 0.08)'
    : 'rgba(0, 0, 0, 0.08)'};
      background-color: ${({ isDark, theme }) => isDark
    ? theme.palette.background.paper
    : theme.palette.common.white};
    }

    tr:last-child td {
      border-bottom: none;
    }

    tr:hover td {
      background-color: ${({ isDark, theme }) => isDark
    ? `${theme.palette.action.hover}`
    : `${theme.palette.primary.light}15`};
    }

    @media (max-width: 600px) {
      table {
        display: block;
        overflow-x: auto;
        white-space: nowrap;
      }
      
      th, td {
        padding: 8px 12px;
      }
    }


    .MuiAlert-action {
      margin-right: 0;
      margin-left: 0;
      padding: 4px 16px 0 0;
    }
  }
`;
