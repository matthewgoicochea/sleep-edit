import React, { useEffect } from "react";

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
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col text-center">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title my-0">Time Now</h5>
              <h6 className="card-subtitle text-muted my-0">EST</h6>
              <p className="card-text">
                {state.time.hour}:{state.time.minute}:{state.time.second}
              </p>
            </div>
          </div>
        </div>

        <div className="col text-center">
          <div className="card bg-dark text-white">
            <div className="card-body">
              <h5 className="card-title">Sleep Hours</h5>
              <p className="card-text">
                <span>
                  <button
                    className="btn text-light"
                    id="decrease-sleepHours"
                    onClick={buttonHandler}
                  >
                    -
                  </button>
                  {state.sleepHours} hrs
                  <button
                    className="btn text-light"
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

        <div className="col text-center">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sleep At</h5>
              <p className="card-text">
                <span>
                  <button
                    className="btn"
                    id="decrease-sleepAt"
                    onClick={buttonHandler}
                  >
                    -
                  </button>
                  {state.sleepAt} pm
                  <button
                    className="btn"
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

        <div className="col text-center">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Wake up</h5>
              <p className="card-text">
                <span>
                  <button
                    className="btn"
                    id="decrease-wakeUp"
                    onClick={buttonHandler}
                  >
                    -
                  </button>
                  {state.wakeUp} am
                  <button
                    className="btn"
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
      </div>
    </div>
  );
}

export default Layout;
