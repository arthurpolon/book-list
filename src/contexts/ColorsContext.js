import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import React, { createContext, useContext } from 'react';

// import { Container } from './styles';

export const ColorsContext = createContext()

function ColorsContextProvider({children}) {

  const { colorMode, toggleColorMode } = useColorMode()

  const textColor = useColorModeValue('blue.900', '#ededed')
  const primaryColor = useColorModeValue('blue.200', 'blue.700')
  const secondaryColor = useColorModeValue('blue.100', 'blue.900')

  return (
    <ColorsContext.Provider value={{textColor, primaryColor, secondaryColor, colorMode, toggleColorMode}}>
      {children}
    </ColorsContext.Provider>
  );
}

export const useColors = () => {
  return useContext(ColorsContext)
}

export default ColorsContextProvider;