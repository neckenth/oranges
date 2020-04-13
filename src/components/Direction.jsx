import React from "react";
import { findInTransit, findStopped } from "../utils";
import "../../public/styles.css";

const Direction = (props) => {
  const { direction, trains } = props;
  return (
    <div className="direction-container">
      <h2>{direction.toUpperCase()}</h2>
      <div className="direction-section">
        STOPPED AT:{" "}
        <span className="dot" style={{ backgroundColor: "#ff0000" }} />
      </div>
      {findStopped(trains, direction).map((elem, i) => (
        <div key={i}>{elem}</div>
      ))}
      <div className="direction-section">
        APPROACHING:{" "}
        <span className="dot" style={{ backgroundColor: "#00ff00" }} />
      </div>
      {findInTransit(trains, direction).map((elem, i) => (
        <div key={i}>{elem}</div>
      ))}
    </div>
  );
};

export default Direction;
