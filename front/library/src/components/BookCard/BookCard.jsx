/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useCallback, useState } from "react";
import {
  ListItem,
  ListItemText,
  Divider,
  Typography,
  IconButton,
} from "@mui/material";
import BookDetailsModal from "../BookModals/BookDetailsModal";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteBookModal from "../BookModals/DeleteBookModal";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function BookCard(props) {
  const { books, setBooks, statuses } = useContext(GlobalContext);
  const { id, name, ...otherProps } = props;
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleOpenDetailsModal = () => {
    setOpenDetailsModal(true);
  };

  const handleCloseDetailsModal = () => {
    setOpenDetailsModal(false);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const handleUpdateBook = useCallback(
    (updatedBook) => {
      setBooks(
        books.map((book) =>
          book.id === updatedBook.id
            ? { ...book, current_page: updatedBook.current_page, reading_status: updatedBook.reading_status}
            : book
        )
      );
    },
    [books]
  );

  const handleDeleteBook = (deletedBook) => {
    setBooks(books.filter((book) => book.id !== deletedBook.id));
  };

  return (
    <>
      <ListItem
        onClick={handleOpenDetailsModal}
        key={id}
        sx={{
          width: "60%",
          // maxWidth: 600,
          margin: "16px",
          color: "black",
          backgroundColor: "white",
        }}
      >
        <IconButton
          onClick={(event) => {
            event.stopPropagation();
            handleOpenDeleteModal();
          }}
          sx={{ mr: "2rem" }}
        >
          <DeleteIcon sx={{ color: "red" }} />
        </IconButton>
        <ListItemText
          primary={<Typography variant="h6">{name}</Typography>}
          secondary={Object.entries(otherProps).map(([key, value]) => {
            return (
              <Typography
                key={key}
                component="span"
                variant="body2"
                color="textSecondary"
              >
                {key.replace(/_/g, " ").toLowerCase()}:{" "}
                {key === "reading_status"
                  ? statuses.find((status) => status.id === value).name
                  : value}
                <br />
              </Typography>
            );
          })}
        />
      </ListItem>
      <Divider component="li" />

      <BookDetailsModal
        open={openDetailsModal}
        onClose={handleCloseDetailsModal}
        book={{
          id,
          name,
          ...otherProps,
        }}
        onUpdate={handleUpdateBook}
      />

      <DeleteBookModal
        open={openDeleteModal}
        onClose={handleCloseDeleteModal}
        book={{
          id,
          name,
          ...otherProps,
        }}
        onDelete={handleDeleteBook}
      />
    </>
  );
}
