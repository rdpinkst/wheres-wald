import React, { useEffect, useState } from "react";
import NavigationBar from "./components/NavigationBar";
import WaldoPic from "./components/WaldoPic";
import TargetBox from "./components/TargetBox";
import ScoreInput from "./components/ScoreInput";
import LeaderBoard from "./components/LeaderBoard";
import "./App.css";
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [left, setLeft] = useState(null);
  const [top, setTop] = useState(null);
  const [render, setRender] = useState(false);
  const [coordinates, setCoordinates] = useState({});
  const [screenDim, setScreenDim] = useState({});
  const [showBox, setShowBox] = useState(false);
  const [characterLocation, setCharacterLocation] = useState([]);
  const [showLeaderBoard, setShowLeaderBoard] = useState(false);
  const [currentPlayerId, setCurrentPlayerId] = useState("");

  //Grab character location from Firestore and save to state
  useEffect(() => {
    if (render) {
      console.log("Running......ONCE");
    } 
    if(!render){
      console.log("First run")
      setRender(prevState => !prevState)
    }
    // setTime();
    // getCharacters();
  }, []);

  function getCharacters() {
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
  }

  async function setTime() {
    console.log("Running");
    const newItem = await addDoc(collection(db, "leaderboard"), {
      timeStart: serverTimestamp(),
    });

    const fileId = newItem.id;
    setCurrentPlayerId(fileId);
    const updateDocId = doc(db, "leaderboard", fileId);
    await updateDoc(updateDocId, {
      id: fileId,
    });
  }

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

  useEffect(() => {
    const arrFound = characterLocation.filter((char) => char.found === true);
    if (arrFound.length === 3) {
      setShowLeaderBoard((prevState) => !prevState);
    }
  }, [characterLocation]);

  return (
    <div className="App">
      <NavigationBar location={characterLocation} />
      <div className="box">
        {showLeaderBoard && <ScoreInput />}
        <WaldoPic findCoord={findCoors} />
        {showBox && !showLeaderBoard && (
          <TargetBox
            posY={top}
            posX={left}
            clientCoord={coordinates}
            location={characterLocation}
            setLocation={setCharacterLocation}
            checkScreenChange={setScreenDim}
            show={showBox}
            setShow={setShowBox}
          />
        )}
      </div>
    </div>
  );
}

export default App;
