import * as Styled from './RemovedList.styled';
import { RemovedItem } from '@/components';
import { CarouselItemType } from '../CarouselItem/CarouselItem';
import { Box } from '@chakra-ui/react';

interface RemovedListProps {
  removedList: CarouselItemType[];
}

function RemovedList({ removedList }: RemovedListProps) {
  return (
    <Box position="absolute" top={0} left={58}>
      <Styled.RemovedItemList>
        {removedList.map(({ teamName, removedImage }) => {
          return <RemovedItem removedImage={removedImage} key={`removed-item-${teamName}`} />;
        })}
      </Styled.RemovedItemList>
    </Box>
  );
}

export default RemovedList;
