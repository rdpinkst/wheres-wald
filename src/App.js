import React from "react";
import NavigationBar from "./components/NavigationBar";
import WaldoPic from "./components/WaldoPic";
import TargetBox from "./components/TargetBox";
import "./App.css";

function App() {
  function findCoors(e) {
    const x = e.clientX;
    const y = e.clientY;

    const xScroll = window.scrollX;
    const yScroll = window.scrollY;

    const xOff = document.querySelector(".waldo-pic").offsetLeft;
    const yOff = document.querySelector(".waldo-pic").offsetTop;

    const xWidth = document.querySelector(".waldo-pic").clientWidth;
    const yHeight = document.querySelector(".waldo-pic").clientHeight;

    console.log(yOff);
    console.log(xOff);

    console.log(x + xScroll - xOff + ", " + (y + yScroll - yOff));
    console.log(xWidth);
    console.log(yHeight);
    
  }

  return (
    <div className="App">
      <NavigationBar />
      <div className="box">
        <WaldoPic findCoord = {findCoors} /> 
        <TargetBox />
      </div>
    </div>
  );
}

export default App;
