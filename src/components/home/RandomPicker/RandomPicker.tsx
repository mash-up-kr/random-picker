import React, { useState } from 'react';
import * as Styled from './RandomPicker.styled';
import { Carousel, RemovedList, RemovedPlaceholderList } from '@/components';
import { CarouselItemType } from '../CarouselItem/CarouselItem';
import { mashUp12thProjectTeams } from '@/static';

type Props = {};

function RandomPicker({}: Props) {
  const [removedList, setRemovedList] = useState<CarouselItemType[]>([]);

  return (
    <>
      <Carousel carouselList={mashUp12thProjectTeams} setRemovedList={setRemovedList} />
      <Styled.RemovedContainer>
        <RemovedPlaceholderList carouselList={mashUp12thProjectTeams} />
        <RemovedList removedList={removedList} />
      </Styled.RemovedContainer>
    </>
  );
}

export default RandomPicker;
