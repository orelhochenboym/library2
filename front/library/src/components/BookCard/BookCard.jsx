/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { ListItem, ListItemText, Divider, Typography } from "@mui/material";
import BookDetailsModal from "../BookModals/BookDetailsModal";

export default function BookCard(props) {
  const { id, name, ...otherProps } = props;
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleUpdateBook = (updatedBook) => {
    // Here you can handle updating the book details
    console.log("Updated book details:", updatedBook);
  };

  return (
    <>
      <ListItem
        onClick={handleOpenModal}
        key={id}
        sx={{
          width: "60%",
          // maxWidth: 600,
          margin: "16px",
          color: "black", // Set text color to black
          backgroundColor: "white", // Set background color to white
        }}
      >
        <ListItemText
          onClick={handleOpenModal}
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
        open={openModal}
        onClose={handleCloseModal}
        book={{
          id,
          name,
          ...otherProps,
        }}
        onUpdate={handleUpdateBook}
      />
    </>
  );
}
