import styled from 'styled-components';

export const Facilities = styled.div`
  flex-direction: column;
  justify-items: center;
  align-items: center;
  display: flex;
  padding: 50px 0;

  .facilities__container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    .facilities__container {
      width: 100% !important;
    }
  }
`;
