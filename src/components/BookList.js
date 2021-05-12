import {Flex} from '@chakra-ui/react'
import { useBooks } from '../contexts/BooksContext';
import BookCard from './BookCard';

const BookList = () => {
    const { books } = useBooks()

    return (
        <Flex w='100%' bg='#1A365D' direction='column'>
            {books.map(book => {
                return (<BookCard book={book}/>)
            })}
        </Flex>
    );
}
 
export default BookList;