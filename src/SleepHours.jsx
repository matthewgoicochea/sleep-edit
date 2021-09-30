import React from "react";

function SleepHours({ state, setState }) {
  const onLock = () => {
    setState({
      ...state,
      sleepHoursLock: !state.sleepHoursLock,
      wakeUpLock: false,
      wakeUp: 7,
    });
    const lock = document.querySelector("#lockSleepHrs");
    const increaseSH = document.querySelector("#increase-sleepHours");
    const decreaseSH = document.querySelector("#decrease-sleepHours");

    if (lock.getAttribute("locked") === "true") {
      // unlock
      lock.classList.add("bi-unlock");
      lock.classList.remove("bi-lock");
      lock.setAttribute("locked", false);
      increaseSH.classList.remove("disabled");
      decreaseSH.classList.remove("disabled");
    } else {
      // lock
      lock.classList.add("bi-lock");
      lock.classList.remove("bi-unlock");
      lock.setAttribute("locked", true);
      increaseSH.classList.add("disabled");
      decreaseSH.classList.add("disabled");
    }
  };

  const buttonHandler = ({ target }) => {
    if (target.id === "increase-sleepHours") {
      if (state.sleepHours < 12) {
        if (target.innerHTML === "+") {
          setState({
            ...state,
            sleepHours: state.sleepHours + 1,
          });
        }
      }
    }
    if (target.id === "decrease-sleepHours") {
      if (state.sleepHours > 5) {
        if (target.innerHTML === "-") {
          setState({ ...state, sleepHours: state.sleepHours - 1 });
        }
      }
    }
  };
  return (
    <div className="col text-center">
      <div className="card" id="sleepHrs">
        <div className="card-body">
          <span>
            <h5 className="card-title">Sleep Hours</h5>
            <i
              className="bi bi-unlock"
              id="lockSleepHrs"
              onClick={onLock}
              locked="false"
            ></i>
          </span>
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
