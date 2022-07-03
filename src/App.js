import React from "react";
import SearchBar from "./components/searchbar/searchbar";
import Header from "./components/header/header";
import LineGraph from "./components/graph/graph";
import StockDetails from "./components/stock_details/stock_details";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <div className="information">
        <LineGraph />
        <StockDetails />
      </div>
    </div>
  );
}

export default App;
