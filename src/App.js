import React, { useState } from "react";
import Layout from "./Layout";
import useInterval from "./utils/useInterval";
import "./App.css";

function App() {
  const now = new Date();

  const [state, setState] = useState({
    time: {
      hour: 0,
      minute: 0,
      second: 0,
    },
    sleepHours: 9,
    sleepAt: 10,
    wakeUp: 7,
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
    <>
      <div className="container py-3 text-center">
        <div className="h1">Sleep Edit</div>
      </div>
      <div>
        <Layout state={state} setState={setState} />
      </div>
    </>
  );
}

export default App;
