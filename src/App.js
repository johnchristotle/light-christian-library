import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import BookData from "./Data.json";

function App() {
  return (
    <div>
      
      <div className="header-me">
      <h1>Light Christian Library</h1>
      </div>
      
      <div className="App">
      <SearchBar placeholder="Enter a Book Name..." data={BookData} />
      </div>
    
      <div className="me-holder">
      <p className="me">Developed: by Christotle Agholor (c) 2022</p>
      </div>

    </div>
  );
}

export default App;