import { Box, Heading, Text } from "@chakra-ui/react";
import { useBooks } from "../contexts/BooksContext";
import { useColors } from "../contexts/ColorsContext";

const Header = () => {
   const { books } = useBooks();

   const {textColor, primaryColor} = useColors()

   return (
      <Box
         p="30px"
         mt='50px'
         textAlign="center"
         bgColor={primaryColor}
         w="100%"
         borderRadius="5px 5px 0 0"
         marginBottom=""
      >
         <Heading color={textColor} mb='10px'>Polon Book List</Heading>
         {books.length ? (
            <Text color={textColor}>
               Currently you have {books.length} books to get through...
            </Text>
         ) : (
            <Text color={textColor}>Currently you have no books to read.</Text>
         )}
      </Box>
   );
};

export default Header;
