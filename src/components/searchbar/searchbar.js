import "./searchbar.css";
import {useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";

function SearchBar(props) {
  const [ticker, setTicker] = useState('');

  const handleChange = event => {
    setTicker(event.target.value);
  }
  
  function clickhandler(){
    // props.parent_func({status:'',close_week:[110,90,170,180,190,200,210],open:12.0,close:2.0})
    fetch("https://guided-study-backend.herokuapp.com/predict",{
            'method':'POST',
            'mode': 'cors',
             headers : {
            'Content-Type':'application/json',
      },
      body: JSON.stringify({ticker: ticker})
    }).then((response) => {
      console.log(response);
      response.json().then((data) => {
          if (data.status == 'success'){
              const newobj = {status:data.status,
              open:data.open,
              close:data.predicted_close,
              close_week:data.close_week}
              props.parent_func(newobj)
          }
          console.log(data);
      });
  });
    
  }
  
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
        onChange = {handleChange}
      />
      <Button
        variant="contained"
        size="medium"
        sx={{
          marginTop:"0.5%"
        }}
        onClick = {clickhandler}
      >
        Run
      </Button>
    </div>
  );
}

export default SearchBar;
