import React from "react";

function Affirmation({ state }) {
  return (
    <div className="container text-center">
      <p className="p">
        I want <b>{`${state.sleepHours}`}</b> hours of sleep, so I'll sleep at{" "}
        <b>{`${state.sleepAt}`}</b> and wake up at <b>{`${state.wakeUp}`}</b>.
      </p>
    </div>
  );
}

export default Affirmation;
