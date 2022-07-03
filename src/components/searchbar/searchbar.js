import "./searchbar.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";

function SearchBar() {
  return (
    <div className="searchbar">
      <TextField
        id="search"
        variant="outlined"
        label="Enter ticker name e.g AAPL"
        style={{
          backgroundColor: "white",
          width: "15%",
          marginRight: "2.5%",
          marginTop: "0%",
        }}
      />
      <Button
        variant="contained"
        size="medium"
        sx={{
          marginTop:"0.5%"
        }}
      >
        Run
      </Button>
    </div>
  );
}

export default SearchBar;
