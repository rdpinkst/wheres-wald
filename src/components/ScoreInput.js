import React from "react";
import "../styles/scoreInput.css"

function ScoreInput(){
    return (
        <form className="score-submit">
           <label htmlFor="player-score">Input Your Name:</label>
            <input type="text" id="player-score" name="playerScore" placeholder="Input Name" />
            <button className="submit-name">Submit</button>
        </form>
    )
}

export default ScoreInput;