import { Box, Heading, Text } from "@chakra-ui/react";
import { useBooks } from "../contexts/BooksContext";

const Header = () => {
   const { books } = useBooks();

   return (
      <Box
         p="30px"
         textAlign="center"
         bgColor="#2C5282"
         w="100%"
         borderRadius="5px 5px 0 0"
         color="#eee"
      >
         <Heading mb='10px'>Polon Book List</Heading>
         {books.length ? (
            <Text>
               Currently you have {books.length} books to get through...
            </Text>
         ) : (
            <Text>Currently you have no books to read.</Text>
         )}
      </Box>
   );
};

export default Header;
