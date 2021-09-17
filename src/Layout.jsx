import React, { useEffect } from "react";
import Affirmation from "./Affirmation";
import SleepAt from "./SleepAt";
import SleepHours from "./SleepHours";
import ThemeSelector from "./ThemeSelector";
import TimeNow from "./TimeNow";
import WakeUp from "./WakeUp";

function Layout({ state, setState }) {
  useEffect(() => {}, [state.sleepHours]);

  const buttonHandler = ({ target }) => {
    console.log("btn:", target.id);

    // DECREASE
    if (target.id === "decrease-sleepHours") {
      if (state.sleepHours > 5) {
        if (target.innerHTML === "-") {
          setState({ ...state, sleepHours: state.sleepHours - 1 });
        }
      }
    }
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
    if (target.id === "increase-sleepHours") {
      if (state.sleepHours < 12) {
        if (target.innerHTML === "+") {
          setState({ ...state, sleepHours: state.sleepHours + 1 });
        }
      }
    }
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
      <ThemeSelector state={state} setState={setState} />
      <div className="py-3 text-center">
        <div className="h1">Sleep Edit</div>
      </div>
      <Affirmation state={state} />
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <TimeNow state={state} />
        <SleepHours state={state} buttonHandler={buttonHandler} />
        <SleepAt state={state} buttonHandler={buttonHandler} />
        <WakeUp state={state} buttonHandler={buttonHandler} />
      </div>
    </div>
  );
}

export default Layout;
