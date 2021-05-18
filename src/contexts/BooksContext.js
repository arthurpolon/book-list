import React, { createContext, useContext, useState, useEffect } from "react";
import { db, firebase } from "../firebase/config";
import { useAuth } from "./AuthContext";

export const BooksContext = createContext();

const BooksContextProvider = ({ children }) => {
   const [books, setBooks] = useState([]);
   const { user } = useAuth();
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      if (user) {
         db.collection("books")
            .where("uid", "==", user.uid)
            .orderBy("createdAt", "asc")
            .onSnapshot((snapshot) => {
               setBooks([]);
               snapshot.docs.forEach((doc) => {
                  setBooks((prevBooks) => [...prevBooks, doc]);
                  setLoading(false)
               });
            });
      } else {
         setBooks([]);
         setLoading(false)
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
      <BooksContext.Provider value={{ books, addBook, removeBook, loading, setLoading }}>
         {children}
      </BooksContext.Provider>
   );
};

export const useBooks = () => {
   return useContext(BooksContext);
};

export default BooksContextProvider;
