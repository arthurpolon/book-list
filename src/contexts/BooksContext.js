import React, {createContext, useContext, useState, useEffect} from 'react';

export const BooksContext = createContext()

const BooksContextProvider = ({children}) => {
    const [books, setBooks] = useState([
        {title: 'The way of kings', author:'Brandon Sandersson', id: 1},
        {title: 'the name of the wind', author:'Carl Manson', id: 2}
    ])

    return (
        <BooksContext.Provider value={{books, setBooks}}>
            {children}
        </BooksContext.Provider>
    )
}

export const useBooks = () => {
    return useContext(BooksContext)
}

export default BooksContextProvider