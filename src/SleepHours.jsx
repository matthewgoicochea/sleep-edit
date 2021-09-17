import React from "react";

function SleepHours({ state, buttonHandler }) {
  return (
    <div className="col text-center">
      <div className="card" id="sleepHrs">
        <div className="card-body">
          <h5 className="card-title">Sleep Hours</h5>
          <p className="card-text">
            <span>
              <button
                className="btn shadow-none"
                id="decrease-sleepHours"
                onClick={buttonHandler}
              >
                -
              </button>
              {state.sleepHours} hrs
              <button
                className="btn shadow-none"
                id="increase-sleepHours"
                onClick={buttonHandler}
              >
                +
              </button>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SleepHours;
