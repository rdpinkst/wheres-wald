import React from "react";
import { useState, useEffect } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/scoreInput.css";

function ScoreInput({
  current,
  timeTook,
  setShow,
  restart,
  setLeaderboard,
}) {
  const [submit, setSubmit] = useState(false);

  //create async function to write to firestore the name of player
  function submitted(e) {
    e.preventDefault();
    setSubmit((prevSubmit) => !prevSubmit);
  }

  async function getName() {
    const formData = document.querySelector(".score-submit");
    const playerRef = doc(db, "leaderboard", current);

    await updateDoc(playerRef, {
      name: formData.playerName.value,
    });
  }

  //makes async function run everytime (maybe thinking it wrong)
  useEffect(() => {
    if (submit) {
      console.log("run when submitted");
      timeTook();
      setSubmit((prevSubmit) => !prevSubmit);
      getName();
      setShow((prevShow) => !prevShow);
      setLeaderboard((prevState) => !prevState);
      restart();
    }
  }, [submit]);

  return (
    <form action="#" className="score-submit" onSubmit={submitted}>
      <label htmlFor="player-score">Input Your Name:</label>
      <input
        type="text"
        id="player-score"
        name="playerName"
        placeholder="Input Name"
      />
      <button className="submit-name" type="submit">
        Submit
      </button>
    </form>
  );
}

export default ScoreInput;
