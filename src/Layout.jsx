import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Affirmation from "./Affirmation";
import SleepAt from "./SleepAt";
import SleepHours from "./SleepHours";
import TimeNow from "./TimeNow";
import WakeUp from "./WakeUp";

function Layout({ state, setState, time, setTime }) {
  useEffect(() => {}, [state.sleepHours]);

  return (
    <div className="container">
      <Navbar state={state} setState={setState} />
      <div className="py-3 text-center">
        <div className="h1">Sleep Edit</div>
      </div>
      <Affirmation state={state} />
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <TimeNow time={time} setTime={setTime} />
        <SleepHours state={state} setState={setState} />
        {state.sleepHoursLock ? (
          <WakeUp state={state} setState={setState} />
        ) : null}
        {state.wakeUpLock ? (
          <SleepAt state={state} setState={setState} />
        ) : null}
      </div>
    </div>
  );
}

export default Layout;
