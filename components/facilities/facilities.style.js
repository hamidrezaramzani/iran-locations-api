import styled from 'styled-components';

export const Facilities = styled.div`
  flex-direction:column;
  justify-items:center;
  align-items: center;
  display:flex;
  padding:50px 0;


  .facilities__title {
    margin: 50px 0;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .facilities__container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    width: 50%;
  }

  .title__h4 {
    text-align: center;
    color: #2b3de2;
    font-family: iran-yekan-bold;
  }


  .title__body {
    color: #686868;
  }

  @media screen and (max-width: 768px) {
   .facilities__container {
      width: 100% !important;
   }
  }

`;