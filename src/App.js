import { ChakraProvider, Flex} from "@chakra-ui/react"
import BookList from "./components/BookList";
import Header from "./components/Header";
import NewBookForm from "./components/NewBookForm";
import BooksContextProvider from "./contexts/BooksContext";

function App() {
  return (
      <ChakraProvider>
        <BooksContextProvider>
          <Flex my='20px' mx='auto' w='90%' maxW='700px' direction='column'>
            <Header />
            <BookList />
            <NewBookForm />
          </Flex>
        </BooksContextProvider>
      </ChakraProvider>
  );
}

export default App;
