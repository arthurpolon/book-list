import React, { createContext, useContext, useState, useEffect } from "react";
import { db, firebase } from "../firebase/config";
import { useAuth } from "./AuthContext";

export const BooksContext = createContext();

const BooksContextProvider = ({ children }) => {
   const [books, setBooks] = useState([]);
   const { user } = useAuth();

   useEffect(() => {
      if (user) {
         db.collection("books")
            .where("uid", "==", user.uid)
            .orderBy("createdAt", "asc")
            .onSnapshot((snapshot) => {
               setBooks([]);
               snapshot.docs.forEach((doc) => {
                  setBooks((prevBooks) => [...prevBooks, doc]);
               });
            });
      } else {
         setBooks([]);
      }
   }, [user]);

   const addBook = (title, author) => {
      db.collection("books").add({
         title,
         author,
         createdAt: firebase.firestore.FieldValue.serverTimestamp(),
         uid: user.uid,
      });
   };

   const removeBook = (key) => {
      db.collection("books")
         .doc(key)
         .delete()
         .catch((err) => console.log(err.message));
   };

   return (
      <BooksContext.Provider value={{ books, addBook, removeBook }}>
         {children}
      </BooksContext.Provider>
   );
};

export const useBooks = () => {
   return useContext(BooksContext);
};

export default BooksContextProvider;
