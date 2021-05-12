import {
    Flex,
    FormControl,
    FormLabel,
    Input,
    Button
  } from "@chakra-ui/react"

import React, {useState} from 'react';
import { useBooks } from "../contexts/BooksContext";

const NewBookForm = () => {
    const {addBook} = useBooks()

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        addBook(title, author)
        setTitle('')
        setAuthor('')
    }

    return (
        <Flex justify='center' bg="blue.900" p='40px' w='100%' borderRadius='0 0 5px 5px'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Flex justify='center' align='center' direction='column'>
                    <FormLabel>Add a book</FormLabel>
                    <FormControl mb='15px' w='300px'>
                        <FormLabel hidden>Book Title</FormLabel>
                        <Input placeholder='title' size='sm' onChange={(e) => setTitle(e.target.value)} value={title} required></Input>
                    </FormControl>
                    <FormControl mb='30px'>
                        <FormLabel hidden>Author</FormLabel>
                       <Input placeholder='author' size='sm' onChange={(e) => setAuthor(e.target.value)} value={author} required></Input>
                    </FormControl>
                    <Button w='150px' type='submit'>Add Book</Button>
                </Flex>
            </form>
        </Flex>
    );
}
 
export default NewBookForm;