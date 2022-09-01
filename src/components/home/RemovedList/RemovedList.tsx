import styled from '@emotion/styled';
import { RemovedItem } from '@/components';
import { CarouselItemType } from '../CarouselItem/CarouselItem';

const RemovedItemList = styled.ol`
  display: flex;
  flex-flow: column nowrap;
  width: 279px;
`;

interface RemovedListProps {
  removedList: CarouselItemType[];
}

function RemovedList({ removedList }: RemovedListProps) {
  return (
    <RemovedItemList>
      {removedList.map(({ teamName, removedImage }) => {
        return <RemovedItem removedImage={removedImage} key={`removed-item-${teamName}`} />;
      })}
    </RemovedItemList>
  );
}

export default RemovedList;
