import type { NextPage } from 'next';
import { Container, Box, Button, VStack, ButtonGroup, Flex, Heading } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { useState } from 'react';
import affa from '@/assets/images/에프파.png';
import sixtwosevenone from '@/assets/images/6271.png';
import gonggam from '@/assets/images/공감해조.png';
import ggirriggirri from '@/assets/images/끼리끼리.png';
import mashupbang from '@/assets/images/매시업방위대.png';
import branding from '@/assets/images/브랜딩팀.png';
import jungsin from '@/assets/images/정신머리.png';
import HMM from '@/assets/images/HMM.png';
import Ladder from '@/assets/images/Ladder.png';
import Image from 'next/image';

const Home: NextPage = () => {
  const [items, setItems] = useState(() => [
    affa,
    sixtwosevenone,
    gonggam,
    ggirriggirri,
    mashupbang,
    branding,
    jungsin,
    HMM,
    Ladder,
  ]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval>>();

  const [isRotate, setIsRotate] = useState<boolean>(false);

  return (
    <div css={{ background: '#000' }}>
      <Heading
        as="h1"
        css={{
          color: '#fff',
          fontFamily: 'Gilroy',
          fontWeight: 800,
          textAlign: 'center',
          paddingTop: '60px',
        }}
      >
        Mash-Up 3th Hackathon Sync Presentation
      </Heading>
      <Flex
        justifyContent="center"
        alignItems="center"
        style={{ width: '100vw', height: '100vh', background: '#000' }}
      >
        <VStack spacing="250px">
          <Container
            css={css`
              margin: 0 auto;
              width: 215px;
              height: 270px;
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
                    key={idx}
                    css={css`
                      position: absolute;
                      background: #fff;
                      width: 180px;
                      height: 320px;
                      /* border: 2px solid #333; */
                      font-size: 5em;
                      text-align: center;
                      color: #000;
                      /* opacity: 0.95; */
                      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
                        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
                        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
                      border-radius: 10px;
                      transition: transform 2s;
                      perspective: 500px;
                      transform: rotateY(
                          ${idx * (360 / items.length) + currentIdx * (360 / items.length)}deg
                        )
                        translateZ(350px);
                    `}
                  >
                    <Image
                      src={item.src}
                      alt=""
                      layout="fill"
                      placeholder="blur"
                      blurDataURL={item.blurDataURL}
                      onClick={() => {
                        setItems((items) =>
                          items.filter((item, idx) => {
                            if (items.length - (currentIdx % items.length) === items.length) {
                              return idx !== items.length - 1;
                            }
                            return idx !== items.length - (currentIdx % items.length);
                          }),
                        );
                      }}
                    />
                  </Box>
                );
              })}
            </Box>
          </Container>
          <ButtonGroup gap="8px">
            <Button
              css={{ background: '#fff', color: '#6244FF', fontWeight: 800, padding: '19px' }}
              size="lg"
              onClick={() => {
                if (!intervalId) {
                  setIntervalId(
                    setInterval(() => {
                      setCurrentIdx((idx) => idx + 1);
                    }, 100),
                  );
                }
                setIsRotate(!isRotate);
              }}
              disabled={isRotate}
            >
              시작
            </Button>
            <Button
              css={{ background: '#fff', color: '#6244FF', fontWeight: 800, padding: '19px' }}
              size="lg"
              onClick={() => {
                if (intervalId) {
                  setIntervalId(clearInterval(intervalId) as undefined);
                }
                setIsRotate(!isRotate);
              }}
              disabled={!isRotate}
            >
              정지
            </Button>
          </ButtonGroup>
        </VStack>
      </Flex>
    </div>
  );
};

export default Home;
