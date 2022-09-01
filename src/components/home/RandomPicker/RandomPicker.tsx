import React, { useState } from 'react';
import { Carousel, RemovedList } from '@/components';
import { CarouselItemType } from './CarouselItem/CarouselItem';

type Props = {};

function RandomPincker({}: Props) {
  const [removedList, setRemovedList] = useState<CarouselItemType[]>([]);

  return (
    <>
      <Carousel setRemovedList={setRemovedList} />
      <RemovedList removedList={removedList} />
    </>
  );
}

export default RandomPincker;
