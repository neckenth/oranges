import React from "react";
import "../../public/styles.css";

const RefreshButton = (props) => {
  const {
    setLastRefreshed,
    setCounter,
    fetchTrains,
    counter,
    lastRefreshed,
  } = props;
  return (
    <div>
      <button
        className="buttonStyle"
        onClick={() => {
          fetchTrains();
          setLastRefreshed(new Date());
          setCounter(30);
        }}
      >
        <div>REFRESH 00:{counter > 9 ? counter : `0${counter}`}</div>
      </button>
      <div className="lastRefreshed">
        Last refreshed: {lastRefreshed.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default RefreshButton;
