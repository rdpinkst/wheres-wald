import React from "react";
import "../styles/pictureCharacter.css"

function PictureCharacter({char, foundCharacter}){

    return (
        <div className="picture-sizing" style = {{opacity: foundCharacter ? "0.4" : "1"}}>
            <img src={char} alt="Character" />
        </div>
    )
}

export default PictureCharacter;