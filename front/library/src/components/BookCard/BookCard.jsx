/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState } from "react";
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

export default function BookCard(props) {
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

  const handleUpdateBook = (updatedBook) => {
    // Here you can handle updating the book details
    console.log("Updated book details:", updatedBook);
  };

  const handleDeleteBook = (deletedBook) => {
    // Here you can handle updating the book details
    setBooks(books.filter((book) => book.id !== deletedBook.id));
    console.log("Deleted book details:", deletedBook);
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
          color: "black", // Set text color to black
          backgroundColor: "white", // Set background color to white
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
          // onClick={handleOpenDetailsModal}
          primary={<Typography variant="h6">{name}</Typography>}
          secondary={Object.entries(otherProps).map(([key, value]) => {
            return (
              <Typography
                key={key}
                component="span"
                variant="body2"
                color="textSecondary"
              >
                {key.replace(/_/g, " ").toLowerCase()}: {value}
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
