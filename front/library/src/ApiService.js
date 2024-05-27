import axios from "axios";

const api = async () => {
  const api = axios.create({
    //process.env.API_URL,
    baseURL: import.meta.env.API_URL,
  });
  return api;
};

export const getAllBooks = async () => {
  return await api().then(async (api) => {
    return api.get(`/books`);
  });
};

export const updateCurrentPage = async ({id, current_page}) => {
  return await api().then(async (api) => {
    return api.put(`/books/currentPage`, {id, current_page});
  });
};

export const updateReadingStatus = async ({id, reading_status}) => {
  return await api().then(async (api) => {
    return api.put(`/books/readingStatus`, {id, reading_status});
  });
};

export const createBook = async (book) => {
  return await api().then(async (api) => {
    return api.post(`/books`, book);
  });
};

export const deleteBook = async (id) => {
  return await api().then(async (api) => {
    return api.delete(`/books/${id}`);
  });
};

export const getAllreadingStatuses = async () => {
  return await api().then(async (api) => {
    return api.get('/readingStatuses');
  });
};
