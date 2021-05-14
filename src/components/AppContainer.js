import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import SignUser from './SignUser'

// import { Container } from './styles';

function AppContainer({children}) {
  const { user } = useAuth()
  return (
      <Flex mx='auto' w='90%' maxW='500px' direction='column'>
        {user ? children : <SignUser />}
      </Flex>
  );
}

export default AppContainer;