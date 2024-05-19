/* eslint-disable react/prop-types */
// SearchBar.js
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ value, onChange }) {
  return (
    <TextField
      label="Search books"
      variant="outlined"
      fullWidth
      value={value}
      onChange={onChange}
      InputProps={{
        endAdornment: <SearchIcon />,
      }}
    />
  );
}
