import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  removedItemWidth,
  removedItemHeight,
  removedItemMarginBottom,
} from '@/components/home/RemovedItem/RemovedItem.styled';

export const RemovedPlaceholderWrapper = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${removedItemMarginBottom}px;
`;

export const RemovedPlaceholderNumber = styled.span`
  font-size: 40px;
  font-weight: 700;
`;

export const NumberUnderline = styled.div`
  width: 26px;
  height: 7px;
  background: #fff;
`;

export const RemovedPlaceholder = styled.div`
  display: flex;
  align-items: center;
  width: ${removedItemWidth}px;
  height: ${removedItemHeight}px;
  margin-left: 32px;
  padding: 15px;
  background: #151517;
  border-radius: 15px;
`;

export const ImagePlaceholder = styled.div`
  width: 74px;
  height: 74px;
  background: #1c1c20;
  border-radius: 15px;
  margin-right: 19px;
`;

export const TitlePlaceholder = styled.div`
  width: 121px;
  height: 13px;
  background: #1c1c20;
  border-radius: 10px;
  margin-bottom: 15px;
`;

export const TextPlaceholder = styled.div`
  width: 62px;
  height: 12px;
  background: #1c1c20;
  border-radius: 10px;
`;
