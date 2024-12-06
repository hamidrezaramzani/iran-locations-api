import styled from 'styled-components';

export const FaqItem = styled.div`
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