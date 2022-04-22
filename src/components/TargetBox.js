import React from "react";
import CharacterChoices from "./CharacterChoices";
import "../styles/targetBox.css";

function TargetBox() {
  return (
    <div className="box-choices">
      <div className="box-character">
        <h1>Hello World</h1>
      </div>
      <CharacterChoices />
    </div>
  );
}

export default TargetBox;
