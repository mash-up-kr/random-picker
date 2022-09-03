import styled from '@emotion/styled';

export const removedItemWidth = 300;
export const removedItemHeight = 104;
export const removedItemMarginBottom = 20;

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
  width: ${removedItemWidth}px;
  height: ${removedItemHeight}px;
  margin-bottom: ${removedItemMarginBottom}px;
  animation: down 3s 2s ease-in both;
`;
