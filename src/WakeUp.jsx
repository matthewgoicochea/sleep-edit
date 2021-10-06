import React from "react";

function WakeUp({ state, setState }) {
  const buttonHandler = ({ target }) => {
    if (target.id === "decrease-wakeUp") {
      if (target.innerHTML === "-" && state.wakeUp > 1) {
        setState({ ...state, wakeUp: state.wakeUp - 1 });
      }
    }
    if (target.id === "increase-wakeUp" && state.wakeUp < 12) {
      if (target.innerHTML === "+") {
        setState({ ...state, wakeUp: state.wakeUp + 1 });
      }
    }
  };

  const getSleepAt = () => {
    let sleepAt = state.wakeUp - state.sleepHours;
    if (sleepAt <= 0) {
      sleepAt = 12 + sleepAt;
    }
    setState({ ...state, sleepAt: sleepAt });

    return sleepAt;
  };

  const onLock = () => {
    setState({
      ...state,
      wakeUpLock: !state.wakeUpLock,
      sleepAt: getSleepAt(),
    });
    const lock = document.querySelector("#lockWakeUp");
    const increaseWU = document.querySelector("#increase-wakeUp");
    const decreaseWU = document.querySelector("#decrease-wakeUp");

    if (lock.getAttribute("locked") === "true") {
      // unlock
      lock.classList.add("bi-unlock");
      lock.classList.remove("bi-lock");
      lock.setAttribute("locked", false);
      increaseWU.classList.remove("disabled");
      decreaseWU.classList.remove("disabled");
    } else {
      // lock
      lock.classList.add("bi-lock");
      lock.classList.remove("bi-unlock");
      lock.setAttribute("locked", true);
      increaseWU.classList.add("disabled");
      decreaseWU.classList.add("disabled");
    }
  };

  const ampm = () => {
    if (state.ampm === "am") {
      setState({ ...state, ampm: "pm" });
    } else {
      setState({ ...state, ampm: "am" });
    }
  };

  return state.lightsOn ? (
    <div className="col text-center w-75">
      <div className="card">
        <div className="card-body">
          <span>
            <h5 className="card-title">Wake up</h5>
            <i
              className="bi bi-unlock"
              id="lockWakeUp"
              onClick={onLock}
              locked="false"
            ></i>
          </span>
          <p className="card-text">
            <span>
              <button
                className={`btn shadow-none ${
                  state.wakeUpLock ? "disabled" : null
                }`}
                id="decrease-wakeUp"
                onClick={buttonHandler}
              >
                -
              </button>
              {state.wakeUp}{" "}
              <button
                className="btn shadow-none p-0 align-baseline"
                onClick={ampm}
              >
                {state.ampm}
              </button>
              <button
                className={`btn shadow-none ${
                  state.wakeUpLock ? "disabled" : null
                }`}
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
  ) : (
    <div className="col text-center w-75">
      <div className="card bg-dark text-light border-light">
        <div className="card-body">
          <span>
            <h5 className="card-title">Wake up</h5>
            <i
              className="bi bi-unlock"
              id="lockWakeUp"
              onClick={onLock}
              locked="false"
            ></i>
          </span>
          <p className="card-text">
            <span>
              <button
                className={`btn shadow-none text-light ${
                  state.wakeUpLock ? "disabled" : null
                }`}
                id="decrease-wakeUp"
                onClick={buttonHandler}
              >
                -
              </button>
              {state.wakeUp} am
              <button
                className={`btn shadow-none text-light ${
                  state.wakeUpLock ? "disabled" : null
                }`}
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
