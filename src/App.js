import { ChakraProvider} from "@chakra-ui/react"
import BookList from "./components/BookList";
import Header from "./components/Header";
import NewBookForm from "./components/NewBookForm";
import AppContainer from "./components/AppContainer";

import UserInfo from "./components/UserInfo";
import ThemeButton from "./components/ThemeButton";
import AppContextProvider from "./contexts/AppContext";

function App() {
  return (
    <ChakraProvider>
        <AppContextProvider>
          <ThemeButton />
          <AppContainer>
            <UserInfo />
            <Header />
            <BookList />
            <NewBookForm />
          </AppContainer>
        </AppContextProvider>
    </ChakraProvider>
  );
}

export default App;
