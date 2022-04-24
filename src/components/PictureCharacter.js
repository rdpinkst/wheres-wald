import React from "react";
import "../styles/pictureCharacter.css"

function PictureCharacter({char}){

    return (
        <div className="picture-sizing">
            <img src={char} alt="Character" />
        </div>
    )
}

export default PictureCharacter;