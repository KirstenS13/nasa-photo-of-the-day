import React from "react";
import "./App.css";
import PhotoList from "./components/PhotoList.js";
import "./components/styles.css";

import styled from 'styled-components';

const WhiteH1 = styled.h1`
  color: white;
  height: 10vh;
  margin: 45vh 0;
`

function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <WhiteH1>NASA Astronomy Photo of the Day</WhiteH1>
      <PhotoList />
      <p className="bgImgCredit">Background Photo by Ivana Cajina on Unsplash</p>
    </div>
  );
}

export default App;
