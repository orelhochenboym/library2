/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect } from 'react';
import { getAllreadingStatuses, getAllBooks } from '../ApiService'; // Assuming both functions exist in ApiService

const GlobalContext = createContext({
  statuses: [],
  books: [],
  setStatuses: () => {},
  setBooks: () => {},
});

const ContextProvider = ({ children }) => {
  const [statuses, setStatuses] = useState([]);
  const [books, setBooks] = useState([]); // Add state for books

  useEffect(() => {
    const fetchStatuses = async () => {
      try {
        const response = await getAllreadingStatuses();

        if (!response.statusText == 'OK') {
          throw new Error('Failed to fetch statuses');
        }

        const data = response.data;
        setStatuses(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchBooks = async () => {
      try {
        const response = await getAllBooks(); 

        if (!response.statusText == 'OK') {
          throw new Error('Failed to fetch books');
        }

        const data = response.data;
        setBooks(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStatuses();
    fetchBooks();
  }, [setBooks, setStatuses]);

  return (
    <GlobalContext.Provider value={{ statuses, books, setBooks }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { ContextProvider, GlobalContext };
