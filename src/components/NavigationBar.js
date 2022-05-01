import React from "react";
import { useState, useEffect } from "react";
import PictureCharacter from "./PictureCharacter";
import odlaw from "../charcterPics/odlaw.jpg";
import waldo from "../charcterPics/waldo.png";
import wizard from "../charcterPics/wizard.jpg";
import "../styles/navigationBar.css";

function NavigationBar({ location, setStart, start }) {
  const [waldoFound, setWaldoFound] = useState(false);
  const [odlawFound, setOdlawFound] = useState(false);
  const [wizardFound, setWizardFound] = useState(false);

  function checkIfFound(name) {
    const character = location.filter((data) => data.name === name);
    if (character.length > 0) {
      return character[0].found;
    }
    return;
  }

  function buttonClicked(){
    setStart(prevState => !prevState)
  }

  useEffect(() => {
    setWaldoFound(checkIfFound("Waldo"));
    setOdlawFound(checkIfFound("Odlaw"));
    setWizardFound(checkIfFound("Wizard"));
  }, [location]);

  return (
    <div className="nav-bar">
      <h1 className="title-game">Where's Waldo</h1>
      {!start && <div className="center-button">
        <button className="start" onClick={buttonClicked}>Start Game</button>
      </div>}
      <div className="picture-div">
        <PictureCharacter char={waldo} foundCharacter={waldoFound} />
        <PictureCharacter char={odlaw} foundCharacter={odlawFound} />
        <PictureCharacter char={wizard} foundCharacter={wizardFound} />
      </div>
    </div>
  );
}

export default NavigationBar;
