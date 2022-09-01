import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Scene = styled.div<{
  randomIndex: number;
  carouselLength: number;
  isRemoving: boolean;
  rotateYDeg: number;
}>`
  ${({ isRemoving, rotateYDeg }) => css`
    @keyframes carouselRender {
      0% {
        transform: translateZ(-1000px);
      }
      50% {
        transform: translateZ(-5000px);
      }
      100% {
        transform: translateZ(0px);
      }
    }

    @keyframes turn {
      from {
        transform: rotateY(0deg);
      }
      to {
        transform: rotateY(-360deg);
      }
    }

    @keyframes remove {
      from {
        transform: rotateY(0deg);
      }
      to {
        transform: ${`rotateY(-${rotateYDeg}deg)`};
      }
    }

    width: 200px;
    height: 340px;
    position: relative;
    perspective: 1000px;
    margin: 250px auto;

    & .carousel__wrapper {
      transform-style: preserve-3d;
      transition: transform 1s;
      animation: ${isRemoving ? 'remove 3s both' : 'turn 5s infinite linear 1s'};
    }

    & .carousel {
      width: 100%;
      height: 100%;
      position: absolute;
      transform-style: preserve-3d;
      animation: carouselRender 1s;
    }
  `}
`;

export const PickButton = styled.button`
  position: absolute;
  top: 480px;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  background: #6244ff;
  color: #fff;
  padding: 16px;
  border: 0;
  border-radius: 16px;
  width: 120px;
  height: 62px;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #4127d1;
  }

  &:active {
    width: 115px;
    height: 60px;
  }

  &:disabled {
    background-color: #c2b6ff;
    cursor: not-allowed;
  }
`;