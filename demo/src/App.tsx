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
          {device.isAllowedToSleep
            ? "Device is allowed to sleep"
            : "Device is not allowed to sleep"}
        </span>
      </p>
      <div className="control">
        <button
          className={`btn is-primary ${
            !device.isAllowedToSleep ? "is-active" : ""
          }`.trim()}
          onClick={device.preventToSleep}
        >
          Prevent Sleep
        </button>
        <button
          className={`btn is-secondary ${
            device.isAllowedToSleep ? "is-active" : ""
          }`.trim()}
          onClick={device.allowToSleep}
        >
          Allow Sleep
        </button>
      </div>
    </div>
  );
}

export default App;
