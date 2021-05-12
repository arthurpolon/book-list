import { Box, Text, Heading } from "@chakra-ui/react";
import { useBooks } from "../contexts/BooksContext";

const BookCard = ({ book }) => {

    const {removeBook} = useBooks()

   return (
      <Box
         cursor="pointer"
         _hover={{
             textDecorationLine: 'line-through',
             backgroundColor:'rgba(0,0,0,0.1)',
             color:'gray.400'
         }}
         onClick={() => {
            removeBook(book.id);
         }}
         key={book.id}
         bg="blue.700"
         w="380px"
         mt="20px"
         mx="auto"
         p="10px 15px"
         borderRadius="10px"
      >
         <Heading isTruncated size="md">
            {book.title}
         </Heading>
         <Text fontSize="sm">{book.author}</Text>
      </Box>
   );
};

export default BookCard;
