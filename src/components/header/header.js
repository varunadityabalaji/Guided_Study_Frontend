import './header.css';
import Box from '@mui/material/Box';
import React from 'react';

function Header() {
  return (
    <div className = "header">
      <Box>
        <h1 style = {{'color':'white'}}>Stock Price Prediction With Sentiment and Technical Analysis</h1>
        <p style = {{'color':'white'}}>This is an application that predicts stock price using news and technical components of a stock</p>
      </Box>
    </div>
  );
}

export default Header;
