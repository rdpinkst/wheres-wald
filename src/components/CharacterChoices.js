import React from "react";
import "../styles/characterChoices.css";

function CharacterChoices({ location, setLocation, clientCoord, setShow }) {
  function characterFound(e) {
    const characterName = e.target.textContent;
    if (characterName === "Odlaw") {
      checkCoords(characterName);
    } else if (characterName === "Waldo") {
      checkCoords(characterName);
    } else if (characterName === "Wizard") {
      checkCoords(characterName);
    }
  }

  function checkCoords(character) {
    const characterName = location.filter((data) => data.name === character);

    //get x coordinates from characterName and client width
    const x =
      (characterName[0]["x-location"] / characterName[0].origWidth) *
      clientCoord.width;
    const correctX = x - 16 < clientCoord.xcoord && x + 16 > clientCoord.xcoord;
    //get y coordinates from characterName and client height
    const y =
      (characterName[0]["y-location"] / characterName[0].origHeight) *
      clientCoord.height;
    const correctY = y - 16 < clientCoord.ycoord && y + 16 > clientCoord.ycoord;
    if (correctX && correctY) {
      setLocation((prevState) => {
        return prevState.map((data) => {
          if (data.name === character) {
            return {
              ...data,
              found: !data.found,
            };
          } else {
            return data;
          }
        });
      });
    }
    setShow(prevState => !prevState);
  }

  return (
    <div className="btn-container">
      <button className="choice-character" onClick={characterFound}>
        Odlaw
      </button>
      <button className="choice-character" onClick={characterFound}>
        Waldo
      </button>
      <button className="choice-character" onClick={characterFound}>
        Wizard
      </button>
    </div>
  );
}

export default CharacterChoices;
