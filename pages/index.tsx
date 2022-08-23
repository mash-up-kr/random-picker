import type { NextPage } from 'next';
import { Box, Button, ButtonGroup, Center, Heading, Wrap, WrapItem } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
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

const [SCENE_WIDTH, SCENE_HEIGHT] = [210, 320];
const GAP_OF_EACH_ITEM = 20;
const [CARD_WIDTH, CARD_HEIGHT] = [SCENE_WIDTH - GAP_OF_EACH_ITEM, SCENE_HEIGHT - GAP_OF_EACH_ITEM];

const getRadius = ({ width, count }: { width: number; count: number }) => {
  const radius = Math.round(width / 2 / Math.tan(Math.PI / count));
  return radius;
};

const shuffle = <T,>(array: T[]) => {
  const newArray = [...array];
  let currentIndex = newArray.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }

  return newArray;
};

type ResultsProps = {
  results: any[];
};

const Results = ({ results }: ResultsProps) => {
  return (
    <Center>
      <Wrap>
        {results.map((result) => {
          return (
            <WrapItem
              css={css`
                width: ${CARD_WIDTH}px;
                height: ${CARD_HEIGHT}px;
              `}
              key={result.key}
            >
              <Box
                css={css`
                  width: 100%;
                  height: 100%;
                  position: relative;
                  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
                    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
                    rgba(0, 0, 0, 0.09) 0px -3px 5px;
                  border-radius: 10px;
                `}
              >
                <Image
                  src={result.src}
                  alt=""
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={result.blurDataURL}
                />
              </Box>
            </WrapItem>
          );
        })}
      </Wrap>
    </Center>
  );
};

type CarouselProps = {
  items: any[];
  initialItemsLength: number;
  setItems: Dispatch<SetStateAction<any[]>>;
  isFlipped: boolean;
  setResults: Dispatch<SetStateAction<any[]>>;
};

const Carousel = ({
  items,
  setItems,
  initialItemsLength,
  isFlipped,
  setResults,
}: CarouselProps) => {
  return (
    <Box
      css={css`
        width: ${SCENE_WIDTH}px;
        height: ${SCENE_HEIGHT}px;
        position: relative;
        margin: 0 auto;
        perspective: 1800px;
        perspective-origin: top;
      `}
    >
      <Box
        css={css`
          width: 100%;
          height: 100%;
          position: absolute;
          transform: translateZ(${getRadius({ width: SCENE_WIDTH, count: initialItemsLength })}px);
          transform-style: preserve-3d;
          transition: transform 1s;
          color: white;
        `}
      >
        {items.map((item, idx) => {
          return (
            <Box
              key={item.key}
              css={css`
                position: absolute;
                width: ${CARD_WIDTH}px;
                height: ${CARD_HEIGHT}px;
                left: ${GAP_OF_EACH_ITEM / 2}px;
                top: ${GAP_OF_EACH_ITEM / 2}px;
                transition: transform 1s;
                transform: rotateY(${idx * 40}deg)
                  translateZ(${getRadius({ width: SCENE_WIDTH, count: initialItemsLength })}px);
                box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
                  rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
                  rgba(0, 0, 0, 0.09) 0px -3px 5px;
                border-radius: 10px;
              `}
              onClick={() => {
                if (!isFlipped) return;
                const [firstItem, ...restItem] = items;
                setItems(() => restItem);
                setResults((results) => [...results, firstItem]);
              }}
            >
              {!isFlipped ? (
                <Image
                  src={item.src}
                  alt=""
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={item.blurDataURL}
                />
              ) : (
                <Center
                  css={css`
                    width: 100%;
                    height: 100%;
                    background: white;
                  `}
                >
                  <svg
                    width="33"
                    height="34"
                    viewBox="0 0 33 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="css-1pj7zb4 e17cgxae0"
                  >
                    <path d="M0 33.974h33v-33l-33 33Z" fill="#EB6963"></path>
                    <path d="M33 33.974H0v-33l33 33Z" fill="#4C49E0"></path>
                  </svg>
                </Center>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

const Home: NextPage = () => {
  const [items, setItems] = useState(() => [
    { ...affa, key: 'affa' },
    { ...sixtwosevenone, key: 'sixtwosevenone' },
    { ...gonggam, key: 'gonggam' },
    { ...ggirriggirri, key: 'ggirriggirri' },
    { ...mashupbang, key: 'mashupbang' },
    { ...branding, key: 'branding' },
    { ...jungsin, key: 'jungsin' },
    { ...HMM, key: 'HMM' },
    { ...Ladder, key: 'Ladder' },
  ]);

  const { current: initialItemsLength } = useRef(items.length);
  const [isFlipped, setIsFlipped] = useState(false);

  const [results, setResults] = useState<any[]>([]);

  return (
    <Box
      css={css`
        background: #000;
        height: 100vh;
        text-align: center;
      `}
    >
      <Heading
        as="h1"
        css={css`
          color: #fff;
          font-family: 'Gilroy';
          font-weight: 800;
          text-align: center;
          padding-top: 60px;
        `}
      >
        Mash-Up 3th Hackathon Sync Presentation
      </Heading>
      <Box
        css={css`
          margin: 160px 80px;
        `}
      >
        {items.length ? (
          <Carousel
            items={items}
            setItems={setItems}
            initialItemsLength={initialItemsLength}
            isFlipped={isFlipped}
            setResults={setResults}
          />
        ) : (
          <Results results={results} />
        )}
      </Box>
      {items.length ? (
        <ButtonGroup gap="8px">
          <Button
            css={css`
              background: #fff;
              color: #6244ff;
              font-weight: 800;
              padding: 19px;
            `}
            size="lg"
            onClick={() => {
              setItems(shuffle);
            }}
          >
            섞기
          </Button>
          <Button
            css={css`
              background: #fff;
              color: #6244ff;
              font-weight: 800;
              padding: 19px;
            `}
            size="lg"
            onClick={() => {
              setIsFlipped(true);
            }}
          >
            뒤집기
          </Button>
        </ButtonGroup>
      ) : null}
    </Box>
  );
};

export default Home;
