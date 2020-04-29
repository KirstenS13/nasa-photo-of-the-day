import React from "react";
import "./App.css";
import PhotoList from "./components/PhotoList.js";
import "./components/styles.css";

function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <h1>NASA Astronomy Photo of the Day</h1>
      <PhotoList />
      <p className="bgImgCredit">Background Photo by Ivana Cajina on Unsplash</p>
    </div>
  );
}

export default App;
