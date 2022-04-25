import React, { useEffect } from "react";
import CharacterChoices from "./CharacterChoices";
import "../styles/targetBox.css";

function TargetBox({
  posY,
  posX,
  location,
  setLocation,
  clientCoord,
  checkScreenChange,
  show,
  setShow,
}) {
  const styleCharacter = {
    top: `${posY}px`,
    left: `${posX}px`,
  };

  useEffect(() => {
    function newCoords() {
      checkScreenChange((prevState) => ({
        width: window.innerWidth,
        height: window.innerHeight,
        orgWidth: prevState.width,
        orgHeight: prevState.height,
      }));
    }
    if (show) {
      window.addEventListener("resize", newCoords);
    }

    return (_) => {
      window.removeEventListener("resize", newCoords);
    };
  });



  return (
    <div className="box-choices" style={styleCharacter}>
      <div className="box-character"></div>
      <CharacterChoices
        location={location}
        setLocation={setLocation}
        clientCoord={clientCoord}
        setShow = {setShow}
      />
    </div>
  );
}

export default TargetBox;
