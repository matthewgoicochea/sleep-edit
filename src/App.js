import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";

function App() {
  const [time, setTime] = useState({ hour: 0, minute: 0, second: 0 });
  const [state, setState] = useState({
    lightsOn: true,
    sleepHours: 8,
    sleepAt: null,
    wakeUp: 7,
    sleepHoursLock: false,
    wakeUpLock: false,
    ampm: "am",
  });

  return (
    <Router>
      <Layout state={state} setState={setState} time={time} setTime={setTime} />
    </Router>
  );
}

export default App;
