import { ChakraProvider} from "@chakra-ui/react"
import BookList from "./components/BookList";
import Header from "./components/Header";
import NewBookForm from "./components/NewBookForm";
import AppContainer from "./components/AppContainer";

import AuthContextProvider from './contexts/AuthContext'
import BooksContextProvider from './contexts/BooksContext'
import SignOutButton from "./components/SignOutButton";

function App() {
  return (
    <ChakraProvider>
      <AuthContextProvider>
        <BooksContextProvider>
          <AppContainer>
            <SignOutButton />
            <Header />
            <BookList />
            <NewBookForm />
          </AppContainer>
        </BooksContextProvider>
      </AuthContextProvider>
    </ChakraProvider>
  );
}

export default App;
