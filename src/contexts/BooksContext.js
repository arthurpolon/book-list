import React, {createContext, useContext, useState, useEffect} from 'react';

import {v4 as uuid} from 'uuid'

export const BooksContext = createContext()

const BooksContextProvider = ({children}) => {
    const localData = localStorage.getItem('books')
    const [books, setBooks] = useState(localData ? JSON.parse(localData) : [])

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])

    const addBook = (title, author) => {
        setBooks(prevBook => [...prevBook, {title, author, id: uuid()}])
    }

    const removeBook = (id) => {
        setBooks(books => books.filter(book => book.id !== id))
    }

    return (
        <BooksContext.Provider value={{books, addBook, removeBook}}>
            {children}
        </BooksContext.Provider>
    )
}

export const useBooks = () => {
    return useContext(BooksContext)
}

export default BooksContextProvider