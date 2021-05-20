import { Flex } from '@chakra-ui/react'
import { useBooks } from '../contexts/BooksContext';
import { useColors } from '../contexts/ColorsContext';
import BookCard from './BookCard';

const BookList = () => {
    const { books } = useBooks()

    const { secondaryColor } = useColors()

    return (
        <Flex w='100%' bg={secondaryColor} direction='column'>
            {books.map(book => {
                return (<BookCard book={book.data()} id={book.id} key={book.id}/>)
            })}
        </Flex>
    );
}
 
export default BookList;