import { Container } from '@chakra-ui/react';
import { RandomPicker } from '@/components';

function Home() {
  return (
    <>
      <Container display="flex" maxW="100%" p={0}>
        <RandomPicker />
      </Container>
    </>
  );
}

export default Home;
