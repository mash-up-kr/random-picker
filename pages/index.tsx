import type { NextPage } from 'next';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';
import Test from '@/components/common/Test';

const Home: NextPage = () => {
  return (
    <>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Your browser is outdated!</AlertTitle>
        <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
      </Alert>
      <Test></Test>
    </>
  );
};

export default Home;
