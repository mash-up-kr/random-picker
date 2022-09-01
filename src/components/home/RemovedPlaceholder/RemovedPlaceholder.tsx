import { Box } from '@chakra-ui/react';
import * as Styled from './RemovedPlaceholder.styled';

interface RemovedPlaceholderProps {
  sequence: number;
}

function RemovedPlaceholder({ sequence }: RemovedPlaceholderProps) {
  return (
    <Styled.RemovedPlaceholderWrapper>
      <Box>
        <Styled.RemovedPlaceholderNumber>{sequence}</Styled.RemovedPlaceholderNumber>
        <Styled.NumberUnderline />
      </Box>
      <Styled.RemovedPlaceholder>
        <Styled.ImagePlaceholder />
        <Box>
          <Styled.TitlePlaceholder />
          <Styled.TextPlaceholder />
        </Box>
      </Styled.RemovedPlaceholder>
    </Styled.RemovedPlaceholderWrapper>
  );
}

export default RemovedPlaceholder;
