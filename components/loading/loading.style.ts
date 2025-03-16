import styled from 'styled-components';

export const Loading = styled.div`
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @keyframes textFill {
    0% {
      background-position: -100%;
    }
    100% {
      background-position: 100%;
    }
  }

  .loading-text {
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    background: linear-gradient(90deg, transparent, #7d3c98, transparent);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textFill 1.5s linear infinite;
  }
`;
