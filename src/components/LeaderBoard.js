import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import "../styles/leaderBoard.css";

function LeaderBoard({ show, setShow, setStart, setBox }) {
  const [leader, setLeader] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "leaderboard"),
      where("totalTime", ">", 0),
      orderBy("totalTime")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const board = [];
      snapshot.forEach((doc) => {
        board.push({
          name: doc.data().name,
          time: doc.data().totalTime,
          id: doc.data().id,
        });
      });
      setLeader(board);
      console.log("running leaderboard");
    });

    return () => unsubscribe();
  }, [show]);

  function closeBoard(e) {
    console.log(e.target.className)
    if (
      e.target.className !== "leader-board" &&
      e.target.parentNode.className !== "leader-board" &&
      e.target.className !== "person-score" &&
      e.target.parentNode.className !== "person-score"
    ) {
      setShow((prevState) => !prevState);
      setStart((prevState) => !prevState);
      setBox(false);
    }
  }

  useEffect(() => {
    console.log("running eventListener");
    window.addEventListener("click", closeBoard);

    return () => window.removeEventListener("click", closeBoard);
  }, []);

  const orderedBoard = leader.map((data, index) => {
    return (
      <div className="person-score" key={data.id}>
        <p className="name">
          {data.name.length === 0
            ? `${index}.  ANONYMOUS`
            : `${index}.  ${data.name}`}
        </p>
        <p className="time">{data.time} seconds</p>
      </div>
    );
  });

  return (
    <div className="leader-board">
      <h1 className="board-title">Leader Board</h1>
      {orderedBoard}
    </div>
  );
}

export default LeaderBoard;
