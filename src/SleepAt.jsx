import React from "react";

function SleepAt({ state, buttonHandler }) {
  return (
    <div className="col text-center d-none">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Sleep At</h5>
          <p className="card-text">
            <span>
              <button
                className="btn shadow-none"
                id="decrease-sleepAt"
                onClick={buttonHandler}
              >
                -
              </button>
              {state.sleepAt} pm
              <button
                className="btn shadow-none"
                id="increase-sleepAt"
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

export default SleepAt;
