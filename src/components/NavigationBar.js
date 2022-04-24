import React from "react";
import PictureCharacter from "./PictureCharacter";
import odlaw from "../charcterPics/odlaw.jpg";
import waldo from "../charcterPics/waldo.png";
import wizard from "../charcterPics/wizard.jpg";
import "../styles/navigationBar.css";

function NavigationBar({location}) {

    function checkIfFound(name){
        const character = location.filter(data => data.name === name);
        return character[0].found;
    }
    
  return (
    <div className="nav-bar">
      <h1 className="title-game">Where's Waldo</h1>
      <div className="picture-div">
        <PictureCharacter char={waldo} style = {{opacity: checkIfFound("Waldo") ? "0.4" : "1"}} />
        <PictureCharacter char={odlaw} />
        <PictureCharacter char={wizard} />
      </div>
    </div>
  );
}

export default NavigationBar;
