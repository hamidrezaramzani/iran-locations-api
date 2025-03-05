import styled from 'styled-components';
import { SCFacilityItem } from './facility-item.type';

export const FacilityItem = styled.div<SCFacilityItem>`
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  width: 32%;
  .card {
    width: 100%;
    background-color: ${({ isDark }) =>
      isDark ? '#000' : '#efefef'} !important;
    border: 1px solid #242424;
    height: 190px;

    .card__icon-container {
      margin-bottom: 30px;
    }

    .card__icon {
      font-size: 45px;
    }

    .card__title {
      margin-bottom: 5px;
    }

    .card__description {
      margin-top: 5px;
      color: ${({ isDark }) => (isDark ? '#ccc' : '#888')} !important;
    }
  }
`;
