import * as Styled from './RemovedPlaceholderList.styled';
import { RemovedPlaceholder } from '@/components';
import { CarouselItemType } from '../CarouselItem/CarouselItem';

interface RemovedPlaceholderListProps {
  carouselList: CarouselItemType[];
}

function RemovedPlaceholderList({ carouselList }: RemovedPlaceholderListProps) {
  return (
    <Styled.RemovedPlaceholderList>
      {carouselList.map(({ teamName }, index) => {
        return <RemovedPlaceholder sequence={index + 1} key={`removed-placeholder-${teamName}`} />;
      })}
    </Styled.RemovedPlaceholderList>
  );
}

export default RemovedPlaceholderList;
