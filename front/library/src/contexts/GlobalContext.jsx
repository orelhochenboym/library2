/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect } from 'react';
import { getAllreadingStatuses } from '../ApiService';

const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    // Fetch statuses from the backend
    const fetchStatuses = async () => {
      try {
        const response = await getAllreadingStatuses();
        if (!response.ok) {
          throw new Error('Failed to fetch statuses');
        }
        console.log(response);
        const data = await response.data;
        setStatuses(data.statuses);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStatuses();
  }, []);

  return (
    <GlobalContext.Provider value={statuses}>
      {children}
    </GlobalContext.Provider>
  );
};

export { ContextProvider, GlobalContext };
