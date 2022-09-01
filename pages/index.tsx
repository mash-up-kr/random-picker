import { Container } from '@chakra-ui/react';
import { RandomPicker } from '@/components';

function Home() {
  return (
    <>
      <Container display="flex" maxW="7xl">
        <RandomPicker />
      </Container>
    </>
  );
}

export default Home;
