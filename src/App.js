import React, { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import WaldoPic from "./components/WaldoPic";
import TargetBox from "./components/TargetBox";
import "./App.css";

function App() {
  const [left, setLeft] = useState(null);
  const [top, setTop] = useState(null);
  const [showBox, setShowBox] = useState(false)

  function findCoors(e) {
    const x = e.clientX;
    const y = e.clientY;

    const xScroll = window.scrollX;
    const yScroll = window.scrollY;

    const xOff = document.querySelector(".waldo-pic").offsetLeft;
    const yOff = document.querySelector(".waldo-pic").offsetTop;

    const xWidth = document.querySelector(".waldo-pic").clientWidth;
    const yHeight = document.querySelector(".waldo-pic").clientHeight;

    setTop(prevState => prevState = y - 16);
    setLeft(prevState => prevState = x - 16);
    setShowBox(prevState => !prevState);
    
    console.log(x + ", " + y)
    console.log(x + xScroll - xOff + ", " + (y + yScroll - yOff));
    console.log(xWidth + ", " + (yHeight - yOff))
    console.log(yOff)
    
  }

  return (
    <div className="App">
      <NavigationBar />
      <div className="box">
        <WaldoPic findCoord = {findCoors} /> 
        {showBox && <TargetBox posY = {top} posX = {left} />}
      </div>
    </div>
  );
}

export default App;
