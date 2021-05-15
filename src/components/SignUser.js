import React, { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Alert,
  AlertIcon,
  Text,
  Link
} from '@chakra-ui/react';

import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext';

export default function SignUser() {
  const { signInUser, error, setError, createUser } = useAuth()
  const [ isSigningUp, setIsSigningUp ] = useState(false)
  const { register, handleSubmit, formState: { isSubmitting } } = useForm()


  const onSubmit = (data) => {
      if(isSigningUp){
        if(data.password.trim() === data.repeatPassword.trim()){
          createUser(data.email.trim(), data.password.trim())
        }else{
          setError('Passwords does not match.')
        }
      } else (
        signInUser(data.email.trim(), data.password.trim())
      )
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('white', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} w='100%' py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>{ isSigningUp ? "Sign Up" : "Sign In" }</Heading>
        </Stack>
        <Stack align="center">
          {isSigningUp ? (
            <Text fontSize={'lg'} color={'gray.600'}>
            Already have an account? <Link color={'blue.400'} onClick={() => setIsSigningUp(false)}>Sign In</Link>
          </Text>
          ) : (
            <Text fontSize={'lg'} color={'gray.600'}>
              Don't have an account? <Link color={'blue.400'} onClick={() => setIsSigningUp(true)}>Sign Up</Link>
            </Text>
          )}
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'2xl'}
          p={8}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
                <FormControl isDisabled={isSubmitting} isRequired id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input {...register("email")} type="email" />
                </FormControl>
                <FormControl isDisabled={isSubmitting} isRequired id="password">
                  <FormLabel>Password</FormLabel>
                  <Input {...register("password")} type="password" />
                </FormControl>
                {isSigningUp && (
                  <FormControl isDisabled={isSubmitting} isRequired id="repeat-password">
                    <FormLabel>Repeat Password</FormLabel>
                    <Input {...register("repeatPassword")} type="password" />
                  </FormControl>  
                )}
                <Button
                  isLoading={isSubmitting}
                  type="submit"
                  colorScheme="blue">
                  {isSigningUp ? "Sign Up" : "Sign In"}
                </Button>
                
                {error && 
                <Alert status="error">
                  <AlertIcon />
                  {error}
                </Alert>}
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}