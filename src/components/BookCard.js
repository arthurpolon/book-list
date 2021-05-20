import { Box, Text, Heading} from "@chakra-ui/react";
import { useBooks } from "../contexts/BooksContext";
import { useColors } from "../contexts/ColorsContext";

const BookCard = ({ book, id }) => {

   const {removeBook} = useBooks()

    const {textColor, primaryColor} = useColors()

   return (
      <Box
         cursor="pointer"
         _hover={{
             textDecorationLine: 'line-through',
         }}
         onClick={() => {
            removeBook(id);
         }}
         key={book.uid}
         bg={primaryColor}
         color={textColor}
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
