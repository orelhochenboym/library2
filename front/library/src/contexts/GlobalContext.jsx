/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect } from 'react';
import { getAllreadingStatuses, getAllBooks } from '../ApiService'; // Assuming both functions exist in ApiService

const GlobalContext = createContext({
  statuses: [],
  books: [], // Add the 'books' property to the context initial value
  setStatuses: () => {}, // Placeholder functions for setting state
  setBooks: () => {},
});

const ContextProvider = ({ children }) => {
  const [statuses, setStatuses] = useState([]);
  const [books, setBooks] = useState([]); // Add state for books

  useEffect(() => {
    const fetchStatuses = async () => {
      try {
        const response = await getAllreadingStatuses();
        if (!response.ok) {
          throw new Error('Failed to fetch statuses');
        }
        const data = response.data;
        setStatuses(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchBooks = async () => { // Add function to fetch books
      try {
        const response = await getAllBooks(); // Replace with actual API call
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = response.data;
        setBooks(data); // Assuming your API returns books data
     
      } catch (error) {
        console.error(error);
      }
    };

    fetchStatuses();
    fetchBooks(); // Call fetchBooks in the effect
  }, [setBooks, setStatuses]);

  return (
    <GlobalContext.Provider value={{ statuses, books, setStatuses, setBooks }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { ContextProvider, GlobalContext };
