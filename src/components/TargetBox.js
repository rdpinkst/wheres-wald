import React from "react";
import CharacterChoices from "./CharacterChoices";
import "../styles/targetBox.css";

function TargetBox({posY, posX}) {
  const styleCharacter = {
    top: `${posY}px`,
    left: `${posX}px`,

  }

  return (
    <div className="box-choices" style={styleCharacter}>
      <div className="box-character">
      </div>
      <CharacterChoices  />
    </div>
  );
}

export default TargetBox;
