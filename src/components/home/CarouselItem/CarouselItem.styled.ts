import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const carouselItemWidth = 216;
export const carouselItemHeight = 294;

export const CarouselCell = styled.div<{
  isRemoving: boolean;
  rotateY: number;
  translateZ: number;
}>`
  ${({ isRemoving, rotateY, translateZ }) => css`
    @keyframes up {
      10% {
        transform: translateY(0px) ${`rotateY(${rotateY}deg) translateZ(${translateZ}px)`};
      }
      70% {
        transform: translateY(0px) ${`rotateY(${rotateY}deg) translateZ(${translateZ + 100}px)`};
      }
      100% {
        transform: translateY(-1000px) ${`rotateY(${rotateY}deg) translateZ(${translateZ + 100}px)`};
      }
    }

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: ${carouselItemWidth}px;
    height: ${carouselItemHeight}px;
    left: 10px;
    top: 10px;
    color: #fff;
    font-size: 36px;
    border: 2px solid black;
    transition: transform 1s;
    animation: ${isRemoving ? 'up 1s 3.5s both' : ''};
  `}
`;
