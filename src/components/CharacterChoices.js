import React from "react";
import "../styles/characterChoices.css";

function CharacterChoices() {
  const origWidth = 1920;
  const origHeight = 827;
  return (
    <div className="btn-container">
      <button className="choice-character">Odlaw</button>
      <button className="choice-character">Waldo</button>
      <button className="choice-character">Wizard</button>
    </div>
  );
}

export default CharacterChoices;
