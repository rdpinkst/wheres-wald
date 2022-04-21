import React from "react";
import waldo from "../waldo.jpg";
import "../styles/waldoPic.css";

function WaldoPic({findCoord}) {
    return(
        <div className="contain-image">
          <img
            className="waldo-pic"
            onClick={findCoord}
            src={waldo}
            alt="busy waldo"
          />
        </div>

    )
}

export default WaldoPic;