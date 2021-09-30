import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";
import useInterval from "./utils/useInterval";
import "./App.css";

function App() {
  const now = new Date();

  const [state, setState] = useState({
    lightsOn: true,
    time: {
      hour: 0,
      minute: 0,
      second: 0,
    },
    sleepHours: 9,
    sleepAt: 10,
    wakeUp: 7,
    sleepHoursLock: false,
  });

  useInterval(() => {
    setState({
      ...state,
      time: {
        hour: timezone(now.getUTCHours()),
        minute: timeFormat(now.getUTCMinutes()),
        second: timeFormat(now.getUTCSeconds()),
      },
    });
  }, [1000]);

  //timezone (+dst)
  const timezone = (time) => {
    if (time === 0) return 12;
    if (time > 12) {
      return time - 12;
    }
  };

  const timeFormat = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <div id="app">
      <Router>
        <Layout state={state} setState={setState} />
      </Router>
    </div>
  );
}

export default App;
