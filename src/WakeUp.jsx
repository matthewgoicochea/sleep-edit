import React from "react";

function WakeUp({ state, buttonHandler }) {
  return (
    <div className="col text-center">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Wake up</h5>
          <p className="card-text">
            <span>
              <button
                className="btn shadow-none"
                id="decrease-wakeUp"
                onClick={buttonHandler}
              >
                -
              </button>
              {state.wakeUp} am
              <button
                className="btn shadow-none"
                id="increase-wakeUp"
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

export default WakeUp;
