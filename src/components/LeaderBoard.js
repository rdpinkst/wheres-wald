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

function LeaderBoard({ show, setShow }) {
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

  function closeBoard(e){
    if(e.target.className !== "person-score" && e.target.parentNode !== "person-score"){
        setShow(prevState => !prevState)
    }
  }

  useEffect(() => {
      console.log("running eventListener")
      window.addEventListener("click", closeBoard);

      return () => window.removeEventListener("click", closeBoard)
  }, [])

  const orderedBoard = leader.map((data) => {
    return (
      <div className="person-score" key={data.id}>
        <p>{data.name.length === 0 ? "ANONYMOUS" : data.name}</p>
        <p>{data.time}</p>
      </div>
    );
  });

  return (
    <div className="leader-board">
      <h1>Leader Board</h1>
      {orderedBoard}
    </div>
  );
}

export default LeaderBoard;
