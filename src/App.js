import { ChakraProvider} from "@chakra-ui/react"
import BookList from "./components/BookList";
import Header from "./components/Header";
import NewBookForm from "./components/NewBookForm";
import AppContainer from "./components/AppContainer";

import AuthContextProvider from './contexts/AuthContext'
import BooksContextProvider from './contexts/BooksContext'
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <ChakraProvider>
      <AuthContextProvider>
        <BooksContextProvider>
          <AppContainer>
            <UserInfo />
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
