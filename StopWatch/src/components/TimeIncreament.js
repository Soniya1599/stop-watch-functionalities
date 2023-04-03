import React from "react";
import "./timeIncrement.css";

function TimeIncreament({ timeStarted }) {
  function formatSeconds(timeInSeconds) {
    return `${timeInSeconds.toString().padStart(2, "0")}`;
  }

  function formatMilliSeconds(timeInMilliseconds) {
    return `${timeInMilliseconds.toString().padStart(2, "0")}`;
  }
  return (
    <div className="timeDisplayContainer">
      {timeStarted ? (
        <div>
          <div className="timeInSecond">
            {formatSeconds(Math.floor(timeStarted / 100))}
          </div>
          <div className="timeInMillisecond">
            {formatMilliSeconds(timeStarted % 100)}
          </div>
        </div>
      ) : (
        <div>
          <div className="timeInSecond">00</div>
          <div className="timeInMillisecond">00</div>
        </div>
      )}
    </div>
  );
}

export default TimeIncreament;
