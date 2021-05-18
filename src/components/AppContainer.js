import React from 'react';

import SignUser from './SignUser'

import { auth } from '../firebase/config'
import { Flex, Spinner, Center } from '@chakra-ui/react';
import { useAuthState } from 'react-firebase-hooks/auth'

// import { Container } from './styles';

function AppContainer({children}) {
  const [ user, loading ] = useAuthState(auth)

  return (
      <>
        {loading ? (
          <Center h={600}>
            <Spinner size="xl" alignSelf="center" mx="auto" my="auto" />
          </Center>
        ) : (
          <Flex mx='auto' w='90%' maxW='500px' direction='column'>
            {user ? children : <SignUser />}
          </Flex>
        )}
      </>
  );
}

export default AppContainer;