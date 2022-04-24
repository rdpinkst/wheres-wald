import React, { useEffect, useState } from "react";
import NavigationBar from "./components/NavigationBar";
import WaldoPic from "./components/WaldoPic";
import TargetBox from "./components/TargetBox";
import "./App.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [left, setLeft] = useState(null);
  const [top, setTop] = useState(null);
  const [coordinates, setCoordinates] = useState({});
  const [screenDim, setScreenDim] = useState({});
  const [showBox, setShowBox] = useState(false);
  const [characterLocation, setCharacterLocation] = useState([]);

  useEffect(() => {
    const colRef = collection(db, "character-location");
    getDocs(colRef)
      .then((snapshot) => {
        const characters = [];
        snapshot.docs.forEach((doc) => {
          characters.push({ ...doc.data(), id: doc.id, found: false });
        });
        setCharacterLocation(characters);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function findCoors(e) {
    const x = e.clientX;
    const y = e.clientY;

    const xScroll = window.scrollX;
    const yScroll = window.scrollY;

    const xOff = document.querySelector(".waldo-pic").offsetLeft;
    const yOff = document.querySelector(".waldo-pic").offsetTop;

    const xWidth = window.innerWidth;
    const yHeight = window.innerHeight;

    setTop((prevState) => (prevState = y - 16));
    setLeft((prevState) => (prevState = x - 16));
    setScreenDim({
      width: xWidth,
      height: yHeight,
      orgWidth: xWidth,
      orgHeight: yHeight,
    });
    setCoordinates({
      xcoord: x + xScroll - xOff,
      ycoord: y + yScroll - yOff,
      width: xWidth,
      height: yHeight - yOff,
    });
    setShowBox((prevState) => !prevState);
  }
  
 
  useEffect(() => {
    if (showBox) {
      setTop(
        (prevState) => (prevState / screenDim.orgHeight) * screenDim.height
      );
      setLeft(
        (prevState) => (prevState / screenDim.orgWidth) * screenDim.width
      );
    }
  }, [screenDim, showBox]);

  
  return (
    <div className="App">
      <NavigationBar />
      <div className="box">
        <WaldoPic findCoord={findCoors} />
        {showBox && (
          <TargetBox
            posY={top}
            posX={left}
            clientCoord={coordinates}
            location={characterLocation}
            setLocation = {setCharacterLocation}
            checkScreenChange={setScreenDim}
            show={showBox}
            setShow = {setShowBox}
          />
        )}
      </div>
    </div>
  );
}

export default App;
