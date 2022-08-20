import type { NextPage } from 'next';
import { Container, Box, Button, VStack, ButtonGroup, Flex } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { useState } from 'react';

const Home: NextPage = () => {
  const [items, setItems] = useState(() => [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval>>();
  return (
    <Flex justifyContent="center" alignItems="center" style={{ width: '100vw', height: '100vh' }}>
      <VStack spacing="48px">
        <Container
          css={css`
            background: red;
            margin: 0 auto;
            width: 250px;
            height: 200px;
            position: relative;
            perspective: 2000px;
          `}
        >
          <Box
            css={css`
              width: 100%;
              height: 100%;
              position: absolute;
              transform-style: preserve-3d;
            `}
          >
            {items.map((item, idx) => {
              return (
                <Box
                  onClick={() => {
                    setItems((items) =>
                      items.filter(
                        (item, idx) => idx !== items.length - (currentIdx % items.length),
                      ),
                    );
                  }}
                  key={idx}
                  css={css`
                    position: absolute;
                    background: #000;
                    width: 150px;
                    height: 200px;

                    font-size: 5em;
                    text-align: center;
                    color: #fff;
                    opacity: 0.95;
                    border-radius: 10px;
                    transition: transform 2s;
                    perspective: 500px;
                    transform: rotateY(
                        ${idx * (360 / items.length) + currentIdx * (360 / items.length)}deg
                      )
                      translateZ(250px);
                  `}
                >
                  {item}
                </Box>
              );
            })}
          </Box>
        </Container>
        <ButtonGroup>
          <Button
            onClick={() => {
              if (!intervalId) {
                setIntervalId(
                  setInterval(() => {
                    setCurrentIdx((idx) => idx + 1);
                  }, 100),
                );
              }
            }}
          >
            시작
          </Button>
          <Button
            onClick={() => {
              if (intervalId) {
                setIntervalId(clearInterval(intervalId) as undefined);
              }
            }}
          >
            정지
          </Button>
        </ButtonGroup>
      </VStack>
    </Flex>
  );
};

export default Home;
