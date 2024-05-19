/* eslint-disable react/prop-types */
import React ,{ useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function AddBookModal({ open, onClose, onAdd, propNames }) {
  const initialState = propNames.reduce((state, propName) => {
    state[propName] = {
      value: "",
    };
    return state;
  }, {});

  const [formData, setFormData] = useState(initialState);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = Object.values(formData).every((field) => field.valid);
    setIsFormValid(isValid);
  }, [formData]);

  const isValidDate = (dateString) => {
    const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    return regex.test(dateString);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    let isValid;
    if (name === "published_date") {
      isValid = isValidDate(value);
    } else {
      isValid = value.trim() !== "" || name === "current page"; // Basic validation for empty values, except for "Current Page"
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: {
        value,
        valid: isValid,
      },
    }));
  };

  const handleClose = () => {
    onClose();
  };

const handleAddBook = () => {
    // Create new book object
    const newBook = {};
    for (const propName in formData) {
      let formattedPropName = propName.replace(/\s+/g, '_'); // Replace spaces with underscores
      newBook[formattedPropName] = formData[propName].value;
    }
  
    // Add new book
    onAdd(newBook);
    console.log(newBook);
  
    // Close modal
    onClose();
  };
  

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="add-book-modal"
      aria-describedby="add-book-modal-description"
    >
      <Paper
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Add New Book
        </Typography>
        {propNames.map((propName, index) => (
          <React.Fragment key={index}>

            {propName === "reading status" ? (
             <>
             {/* <InputLabel id="reading-status-label">Reading Status</InputLabel> */}
             <Select
            //    labelId="reading-status-label"
               label= "reading status" 
               id="select"
               variant="outlined"
               fullWidth
               value={formData[propName].value}
               onChange={handleChange}
               name={propName}
               sx={{ mt: 2 }}
             >
               <MenuItem value="1">Not Started</MenuItem>
               <MenuItem value="2">In Progress</MenuItem>
               <MenuItem value="3">Completed</MenuItem>
               <MenuItem value="4">On Hold</MenuItem>
             </Select>
           </>
            ) : (
              <TextField
                label={propName}
                variant="outlined"
                fullWidth
                value={formData[propName].value}
                onChange={handleChange}
                name={propName}
                // error={!formData[propName].valid}
                // helperText={!formData[propName].valid && `Please fill in ${propName}.`}
                sx={{ mt: 2 }}
              />
            )}
          </React.Fragment>
        ))}
        <Button
          onClick={handleAddBook}
          variant="contained"
          color="primary"
          disabled={!isFormValid}
          sx={{ mt: 2 }}
        >
          Add Book
        </Button>
      </Paper>
    </Modal>
  );
}
