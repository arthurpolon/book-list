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
  AlertIcon
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext';

export default function LoginForm() {
  const { signInUser, error } = useAuth()
  const { register, handleSubmit, formState: { isSubmitting } } = useForm()

  const onSubmit = (data) => {
    signInUser(data.email.trim(), data.password.trim())
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('white', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} w='100%' py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in</Heading>
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
                <Button
                  isLoading={isSubmitting}
                  type="submit"
                  colorScheme="teal">
                  Sign in
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