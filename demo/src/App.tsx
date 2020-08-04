import React from "react";
import useStayAwake from "use-stay-awake";

function App() {
  const device = useStayAwake();

  return (
    <div className="container">
      <header className="header">
        <h1>use-stay-awake</h1>
        <p>
          React hook that will help the device stay awake while actively using
          your website or app.
        </p>
      </header>

      <p className="status">
        Status:{" "}
        <span>
          {device.canSleep
            ? "Device is allowed to sleep"
            : "Device is not allowed to sleep"}
        </span>
      </p>
      <div className="control">
        <button
          className={`btn is-primary ${
            !device.canSleep ? "is-active" : ""
          }`.trim()}
          onClick={device.preventSleeping}
        >
          Prevent Sleeping
        </button>
        <button
          className={`btn is-secondary ${
            device.canSleep ? "is-active" : ""
          }`.trim()}
          onClick={device.allowSleeping}
        >
          Allow Sleeping
        </button>
      </div>
    </div>
  );
}

export default App;
