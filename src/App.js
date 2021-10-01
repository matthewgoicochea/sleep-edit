import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";

function App() {
  const [time, setTime] = useState({ hour: 0, minute: 0, second: 0 });
  const [state, setState] = useState({
    lightsOn: true,
    sleepHours: 9,
    sleepAt: 10,
    wakeUp: 7,
    sleepHoursLock: false,
    wakeUpLock: false,
  });

  return (
    <div id="app">
      <Router>
        <Layout
          state={state}
          setState={setState}
          time={time}
          setTime={setTime}
        />
      </Router>
    </div>
  );
}

export default App;
