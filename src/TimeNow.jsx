import React from "react";

function TimeNow({ time }) {
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
