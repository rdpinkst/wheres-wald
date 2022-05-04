import React from "react";
import { useState, useEffect } from "react";
import "../styles/scoreInput.css";

function ScoreInput({ current, timeTook }) {
  const [submit, setSubmit] = useState(false);

  //create async function to write to firestore the name of player
  function submitted() {
    setSubmit((prevSubmit) => !prevSubmit);
  }

  function nameSubmit(e) {
    console.log(e.target.value);
  }

  //makes async function run everytime (maybe thinking it wrong)
  useEffect(() => {
    if (submit) {
      console.log("run when submitted");
      timeTook();
      setSubmit((prevSubmit) => !prevSubmit);
    }
  }, [submit]);

  return (
    <form action="#" className="score-submit">
      <label htmlFor="player-score">Input Your Name:</label>
      <input
        type="text"
        id="player-score"
        name="playerScore"
        placeholder="Input Name"
        onChange={nameSubmit}
      />
      <button className="submit-name" type="button" onClick={submitted}>
        Submit
      </button>
    </form>
  );
}

export default ScoreInput;
