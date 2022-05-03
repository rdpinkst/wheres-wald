import React from "react";
import { useState, useEffect } from "react";
import "../styles/scoreInput.css";


function ScoreInput({current}){
    const [submit, setSubmit] = useState(1);

    //create async function to write to firestore the name of player

    //makes async function run everytime (maybe thinking it wrong)
    useEffect(() => {

    }, [submit])

    return (
        <form action = "#" className="score-submit">
           <label htmlFor="player-score">Input Your Name:</label>
            <input type="text" id="player-score" name="playerScore" placeholder="Input Name" />
            <button className="submit-name" type="button">Submit</button>
        </form>
    )
}

export default ScoreInput;