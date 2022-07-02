import './searchbar.css';
import TextField from "@mui/material/TextField";
import React from 'react';

function SearchBar() {
  return (
    <div className = "searchbar">
      <TextField
          id="search"
          variant="outlined"
          label="Search"
        />
    </div>
  );
}

export default SearchBar;
