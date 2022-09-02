import { Dispatch, useState } from 'react';
import { CarouselItemType } from '../CarouselItem/CarouselItem';
import { CarouselItem } from '@/components';
import { carouselItemWidth } from '@/components/home/CarouselItem/CarouselItem.styled';
import * as Styled from './Carousel.styled';

interface CarouselProps {
  carouselList: CarouselItemType[];
  setRemovedList: Dispatch<React.SetStateAction<CarouselItemType[]>>;
}

function Carousel({ carouselList, setRemovedList }: CarouselProps) {
  const [carousel, setCarousel] = useState<CarouselItemType[]>(carouselList);

  const [isRemoving, setIsRemoving] = useState(false);
  const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * carousel.length));

  const handleRandomRemoveCarousel = () => {
    const removeItem = carousel.find((_, index) => index === randomIndex);
    if (!removeItem) return;

    setIsRemoving(true);

    setCarousel((pre) =>
      pre.map((carouselItem, index) =>
        index === randomIndex ? { ...carouselItem, isRemoving: true } : carouselItem,
      ),
    );
    setTimeout(() => {
      setCarousel(carousel.filter((_, index) => index !== randomIndex));

      const randomValue = Math.floor(Math.random() * (carousel.length - 1));

      setIsRemoving(false);
      setRandomIndex(randomValue);
    }, 5500);
    setRemovedList((pre) => [...pre, removeItem]);
  };

  const removeItemRotateY = (360 / carousel.length) * randomIndex * (carousel.length * 3 + 1);

  return (
    <Styled.Scene>
      <Styled.CarouselWrapper
        isRemoving={isRemoving}
        removeItemRotateY={removeItemRotateY || 360 * 10}
      >
        <Styled.Carousel>
          {carousel.map((carouselItem, index) => {
            const rotateY = (360 / carousel.length) * index;
            const translateZ = Math.round(
              (carouselItemWidth * 1.2) / 2 / Math.tan(Math.PI / carousel.length),
            );
            return (
              <CarouselItem
                carouselItem={carouselItem}
                rotateY={rotateY}
                translateZ={translateZ}
                key={`carousel-item-${carouselItem.teamName}`}
              />
            );
          })}
        </Styled.Carousel>
      </Styled.CarouselWrapper>
      <Styled.PickButton onClick={handleRandomRemoveCarousel} disabled={isRemoving}>
        뽑기
      </Styled.PickButton>
    </Styled.Scene>
  );
}

export default Carousel;
