import styled from '@emotion/styled';

export const RemovedItem = styled.li`
  @keyframes down {
    from {
      transform: translateY(-2000px);
    }
    to {
      transform: translateY(0px);
    }
  }

  position: relative;
  width: 275px;
  height: 110px;
  border: 2px solid black;
  animation: down 3s 2s ease-in both;
`;
