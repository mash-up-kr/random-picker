import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Your browser is outdated!</AlertTitle>
      <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
    </Alert>
  );
};

export default Home;
