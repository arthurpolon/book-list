import { Box, Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import React from 'react';

// import { Container } from './styles';

function ThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box pos="absolute" mt="20px" ml="20px">
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <MoonIcon w={5} h={5} /> : <SunIcon w={5} h={5} />}
      </Button>
    </Box>
  )
}

export default ThemeButton;