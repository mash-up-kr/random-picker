import Image, { StaticImageData } from 'next/image';
import * as Styled from './CarouselItem.styled';

export interface CarouselItemType {
  teamName: string;
  image: StaticImageData;
  removedImage: StaticImageData;
  isRemoving: boolean;
}

interface CarouselItemProps {
  rotateY: number;
  translateZ: number;
  carouselItem: CarouselItemType;
}

function CarouselItem({
  rotateY,
  translateZ,
  carouselItem: { isRemoving, image, teamName },
}: CarouselItemProps) {
  return (
    <Styled.CarouselCell
      rotateY={rotateY}
      translateZ={translateZ}
      isRemoving={isRemoving}
      style={{
        transform: `rotateY(${rotateY}deg) translateZ(${translateZ > 0 ? translateZ : 100}px)`,
      }}
      key={`item-${teamName}`}
    >
      <Image
        src={image.src}
        alt=""
        layout="fill"
        placeholder="blur"
        blurDataURL={image.blurDataURL}
      />
    </Styled.CarouselCell>
  );
}

export default CarouselItem;
