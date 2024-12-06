import styled from 'styled-components';

export const FacilityItem = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  width: 32%;
  .card {
    width: 100%;
    background-color: ${({ isDark }) =>
    isDark ? '#000' : '#efefef'} !important;
    border: 1px solid #242424;

    .description {
      margin-top: 5px;
      color: ${({ isDark }) => (isDark ? '#ccc' : '#888')} !important;
    }


  }
`;
