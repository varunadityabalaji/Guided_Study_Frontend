import React from "react";
import SearchBar from "./components/searchbar/searchbar";
import Header from "./components/header/header";
import LineGraph from "./components/graph/graph";
import StockDetails from "./components/stock_details/stock_details";
import { useState } from "react";

function App() {
  const [info, setinfo] = useState({status:'',close_week:[1,2,3,4,5,6,7],open:0.0,close:0.0});

  const change_data = (childData) => {setinfo(childData)}

  return (
    <div className="App">
      <Header />
      <SearchBar parent_func = {change_data}/>
      <div className="information">
        <LineGraph data = {info.close_week}/>
        <StockDetails open_price = {info.open} close_price = {info.close}/>
      </div>
    </div>
  );
}

export default App;
