import React from "react";

function WakeUp({ state, buttonHandler, setState }) {
  const onLock = () => {
    setState({ ...state, wakeUpLock: !state.wakeUpLock });
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
  return (
    <div className="col text-center">
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
