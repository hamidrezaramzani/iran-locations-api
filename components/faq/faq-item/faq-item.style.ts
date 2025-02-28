import styled from 'styled-components';
import { SCFaqItem } from './faq-item.type';

export const FaqItem = styled.div<SCFaqItem>`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
  .accordion {
    width: 100%;
    margin-top: 20px !important;

    background-color: ${({ isDark }) =>
    isDark ? '#000' : '#efefef'} !important;
    border: 1px solid #242424;

  }
`;
