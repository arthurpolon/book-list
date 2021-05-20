import React, { createContext } from 'react';
import AuthContextProvider from './AuthContext';
import BooksContextProvider from './BooksContext';
import ColorsContextProvider from './ColorsContext';

// import { Container } from './styles';

const AppContext = createContext()

function AppContextProvider({children}) {
  return (
    <AppContext.Provider>
      <AuthContextProvider>
        <BooksContextProvider>
          <ColorsContextProvider>
            {children}
          </ColorsContextProvider>
        </BooksContextProvider>
      </AuthContextProvider>
    </AppContext.Provider>
  );
}

export default AppContextProvider;