/* eslint-disable react/prop-types */
import { List } from "@mui/material";
import BookCard from "../BookCard/BookCard";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function BooksDisplay(props) {
  const { books } = useContext(GlobalContext);
  console.log("books");
  console.log(books);

  console.log("GlobalContext")
  console.log(useContext(GlobalContext))

  // const { books } = props;

  return (
    <List
      sx={{
        // width: "80%",
        // height: "60%",
        // overflowY: "scroll",
        // maxWidth: 800,
        color: "black", // Set text color to black
        backgroundColor: "white", // Set background color to white
        margin: "auto",
      }}
    >
      {books.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </List>
  );
}
