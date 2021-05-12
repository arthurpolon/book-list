import {
    Flex,
    FormControl,
    FormLabel,
    Input,
    Button
  } from "@chakra-ui/react"

import React, {useState} from 'react';
import { useBooks } from "../contexts/BooksContext";
import {v4 as uuid} from 'uuid'

const NewBookForm = () => {
    const {setBooks} = useBooks()

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`title: ${title.trim()}, author:${author.trim()}`)
        setTitle('')
        setAuthor('')

        setBooks(books => [...books, {title, author, id: uuid()}])
    }
    
    return (
        <Flex justify='center' bg="blue.900" p='40px' w='100%' borderRadius='0 0 5px 5px'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Flex justify='center' direction='column'>
                    <FormControl mb='15px'>
                        <FormLabel hidden>Book Title</FormLabel>
                        <Input onChange={(e) => setTitle(e.target.value)} value={title} required></Input>
                    </FormControl>
                    <FormControl mb='30px'>
                        <FormLabel hidden>Author</FormLabel>
                       <Input onChange={(e) => setAuthor(e.target.value)} value={author} required></Input>
                    </FormControl>
                    <Button type='submit'>Add Book</Button>
                </Flex>
            </form>
        </Flex>
    );
}
 
export default NewBookForm;