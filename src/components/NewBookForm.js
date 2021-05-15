import { Flex, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

import React from "react";
import { useForm } from "react-hook-form";
import { useBooks } from "../contexts/BooksContext";

const NewBookForm = () => {
   const { addBook } = useBooks();

   const { register, handleSubmit, reset} = useForm()

   const onSubmit = ({title, author}) => {
      addBook(title, author)
      reset()
   };

   return (
      <Flex
         justify="center"
         bg="blue.900"
         p="40px"
         w="100%"
         borderRadius="0 0 5px 5px"
      >
         <form onSubmit={handleSubmit(onSubmit)}>
            <Flex justify="center" align="center" direction="column">
               <FormLabel>Add a book</FormLabel>
               <FormControl mb="15px" w="300px">
                  <FormLabel hidden>Book Title</FormLabel>
                  <Input
                     placeholder="title"
                     size="sm"
                     required
                     {...register("title")}
                  ></Input>
               </FormControl>
               <FormControl mb="30px">
                  <FormLabel hidden>Author</FormLabel>
                  <Input
                     placeholder="author"
                     size="sm"
                     required
                     {...register("author")}
                  ></Input>
               </FormControl>
               <Button w="150px" type="submit">
                  Add Book
               </Button>
            </Flex>
         </form>
      </Flex>
   );
};

export default NewBookForm;
