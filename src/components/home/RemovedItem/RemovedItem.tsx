import Image, { StaticImageData } from 'next/image';
import * as Styled from './RemovedItem.styled';

interface RemovedItemProps {
  removedImage: StaticImageData;
}

function RemovedItem({ removedImage }: RemovedItemProps) {
  return (
    <Styled.RemovedItem>
      <Image
        src={removedImage.src}
        alt=""
        layout="fill"
        placeholder="blur"
        blurDataURL={removedImage.blurDataURL}
      />
    </Styled.RemovedItem>
  );
}

export default RemovedItem;
