import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;


  width: 100%;
  height: 100vh;
  opacity: 0.8;
  background-size: 20px 20px;
  
  background-color: ${({ theme }) =>
    theme.palette.mode === "dark" ? "#000000" : "#ffffff"};

  background-image: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? `repeating-linear-gradient(
          to right,
          #131111,
          #131111 1px,
          #000000 1px,
          #000000
        )`
      : `repeating-linear-gradient(
          to right,
          #eeeeee,
          #eeeeee 1px,
          #ffffff 1px,
          #ffffff
        )`};
`;
