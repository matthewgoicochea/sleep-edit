import React from "react";

function SleepAt({ state, setState }) {
  const buttonHandler = ({ target }) => {
    if (target.id === "decrease-sleepAt") {
      if (target.innerHTML === "-") {
        setState({ ...state, sleepAt: state.sleepAt - 1 });
      }
    }
    if (target.id === "increase-sleepAt") {
      if (target.innerHTML === "+") {
        setState({ ...state, sleepAt: state.sleepAt + 1 });
      }
    }
  };

  const getSleepAt = () => {
    let sleepAt = state.wakeUp - state.sleepHours;
    if (sleepAt <= 0) {
      sleepAt = 12 + sleepAt;
    }
    //if - return 12 - num
    console.log(sleepAt);
    //setState({ ...state, sleepAt: sleepAt });

    return sleepAt;
  };

  return state.lightsOn ? (
    <div className="col text-center">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Sleep At</h5>
          <p className="card-text">
            <span>
              {false && (
                <button
                  className="btn shadow-none"
                  id="decrease-sleepAt"
                  onClick={buttonHandler}
                >
                  -
                </button>
              )}
              {getSleepAt()} am/pm
              {false && (
                <button
                  className="btn shadow-none"
                  id="increase-sleepAt"
                  onClick={buttonHandler}
                >
                  +
                </button>
              )}
            </span>
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="col text-center">
      <div className="card bg-dark text-light border-light">
        <div className="card-body">
          <h5 className="card-title">Sleep At</h5>
          <p className="card-text">
            <span>
              {false && (
                <button
                  className="btn shadow-none text-light"
                  id="decrease-sleepAt"
                  onClick={buttonHandler}
                >
                  -
                </button>
              )}
              {getSleepAt()} pm
              {false && (
                <button
                  className="btn shadow-none text-light"
                  id="increase-sleepAt"
                  onClick={buttonHandler}
                >
                  +
                </button>
              )}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SleepAt;
