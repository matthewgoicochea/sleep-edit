import React from "react";
import useInterval from "./utils/useInterval";

function TimeNow({ time, setTime }) {
  const now = new Date();

  useInterval(() => {
    setTime({
      ...time,
      hour: timezone(now.getUTCHours()),
      minute: timeFormat(now.getUTCMinutes()),
      second: timeFormat(now.getUTCSeconds()),
    });
  }, [1000]);

  //timezone (+dst)
  const timezone = (time) => {
    if (time === 0) return 12;
    if (time > 12) {
      return time - 12;
    }
  };

  const timeFormat = (num) => {
    return num < 10 ? `0${num}` : num;
  };
  return (
    <div className="col text-center">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title my-0">Time Now</h5>
          <h6 className="card-subtitle text-muted my-0">EST</h6>
          <p className="card-text">
            {time.hour}:{time.minute}:{time.second}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TimeNow;
