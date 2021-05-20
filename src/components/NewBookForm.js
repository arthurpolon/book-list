import { Flex, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

import React from "react";
import { useForm } from "react-hook-form";
import { useBooks } from "../contexts/BooksContext";
import { useColors } from "../contexts/ColorsContext";

const NewBookForm = () => {
   const { addBook } = useBooks();

   const { register, handleSubmit, reset} = useForm()

   const {textColor, primaryColor, secondaryColor, colorMode} = useColors()

   const onSubmit = ({title, author}) => {
      addBook(title, author)
      reset()
   };

   return (
      <Flex
         justify="center"
         bg={secondaryColor}
         p="40px"
         w="100%"
         borderRadius="0 0 5px 5px"
      >
         <form onSubmit={handleSubmit(onSubmit)}>
            <Flex justify="center" align="center" direction="column" color={textColor}>
               <FormLabel>Add a book</FormLabel>
               <FormControl mb="15px" w="300px">
                  <FormLabel hidden>Book Title</FormLabel>
                  <Input
                     placeholder="title"
                     size="sm"
                     required
                     {...register("title")}
                     bg={colorMode === "light" ? '#fff' : 'transparent'}
                  ></Input>
               </FormControl>
               <FormControl mb="30px">
                  <FormLabel hidden>Author</FormLabel>
                  <Input
                     placeholder="author"
                     size="sm"
                     required
                     {...register("author")}
                     bg={colorMode === "light" ? '#fff' : 'transparent'}
                  ></Input>
               </FormControl>
               <Button bg={primaryColor} color={textColor} w="150px" type="submit">
                  Add Book
               </Button>
            </Flex>
         </form>
      </Flex>
   );
};

export default NewBookForm;
