import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Affirmation from "./Affirmation";
import SleepAt from "./SleepAt";
import SleepHours from "./SleepHours";
import TimeNow from "./TimeNow";
import WakeUp from "./WakeUp";

function Layout({ state, setState }) {
  useEffect(() => {}, [state.sleepHours]);

  const buttonHandler = ({ target }) => {
    console.log("btn:", target.id);

    // DECREASE
    if (target.id === "decrease-sleepAt") {
      if (target.innerHTML === "-") {
        setState({ ...state, sleepAt: state.sleepAt - 1 });
      }
    }
    if (target.id === "decrease-wakeUp") {
      if (target.innerHTML === "-") {
        setState({ ...state, wakeUp: state.wakeUp - 1 });
      }
    }
    // INCREASE
    if (target.id === "increase-sleepAt") {
      if (target.innerHTML === "+") {
        setState({ ...state, sleepAt: state.sleepAt + 1 });
      }
    }
    if (target.id === "increase-wakeUp") {
      if (target.innerHTML === "+") {
        setState({ ...state, wakeUp: state.wakeUp + 1 });
      }
    }
  };

  return (
    <div className="container">
      <Navbar state={state} setState={setState} />
      <div className="py-3 text-center">
        <div className="h1">Sleep Edit</div>
      </div>
      <Affirmation state={state} />
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <TimeNow state={state} />
        <SleepHours state={state} setState={setState} />
        {state.sleepHoursLock ? (
          <WakeUp
            state={state}
            setState={setState}
            buttonHandler={buttonHandler}
          />
        ) : null}
        {state.wakeUpLock ? (
          <SleepAt
            state={state}
            setState={setState}
            buttonHandler={buttonHandler}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Layout;
