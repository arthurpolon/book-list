import {Box, Text, Heading} from '@chakra-ui/react'

const BookCard = ({book}) => {
    const clickAction = (id) => {
        console.log('clickado lixo', id)
    }

    return (
        <Box onClick={() => {clickAction(book.id)}} key={book.id} bg='#2C5282' w='380px' mt='20px' mx='auto' p='10px 15px' borderRadius='10px'>
            <Heading isTruncated size='md' >{book.title}</Heading>
            <Text fontSize='sm'>{book.author}</Text>
        </Box>
    );
}
 
export default BookCard;