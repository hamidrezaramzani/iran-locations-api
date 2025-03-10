import styled from 'styled-components';

export const SectionTitle = styled.div`
  margin: 50px 0;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .title__h4 {
    text-align: center;
    color: ${({ theme }) => theme.palette.primary.main};
    font-family: vazir-bold;
  }

  .title__body {
    color: #686868;
  }
`;
