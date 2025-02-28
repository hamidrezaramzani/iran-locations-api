import styled from "styled-components";

export const Introduction = styled.div`
  width: 100%;
  display: flex;
  .welcome-span {
    color: #2b3de2;
  }

  .introduction-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .introduction {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .main-title {
      text-align: center;
      font-family: "iran-yekan-bold";
      font-size: 35px;
      padding: 0 8px;
    }

    .secondary-title {
      text-align: center;
      padding: 15px 0;
      font-size: 14px;
      font-family: "iran-yekan";
      width: 80%;
    }
  }
`;
