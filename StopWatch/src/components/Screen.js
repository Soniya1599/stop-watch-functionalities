import React, { useState, useEffect } from "react";
import TimeIncreament from "./TimeIncreament";
import "./screen.css";

const Screen = () => {
  const [start, setStart] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        let currentTime = Date.now();
        let elapsed = Math.floor((currentTime - startTime) / 10) + start;
        setStart(elapsed);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning, startTime]);

  function startStopWatch() {
    setIsRunning(!isRunning);
    if (!isRunning) {
      setStartTime(Date.now());
    }
  }

  function restartStopWatch() {
    setStart(0);
    setStartTime(Date.now());
    setIsRunning(true);
  }

  return (
    <div className="container">
      <TimeIncreament timeStarted={start} />
      <div className="buttonContainer">
        <button onClick={startStopWatch}>
          {isRunning ? "Pause" : "Resume"}
        </button>
        <button onClick={restartStopWatch}>Restart</button>
      </div>
    </div>
  );
};

export default Screen;
