import React from "react";
import useStayAwake from "use-stay-awake";

function App() {
  const device = useStayAwake();

  return (
    <div className="container">
      <button
        className={`btn is-primary ${
          !device.isAllowedToSleep ? "is-active" : ""
        }`.trim()}
        onClick={device.preventSleep}
      >
        Prevent Sleep
      </button>
      <button
        className={`btn is-secondary ${
          device.isAllowedToSleep ? "is-active" : ""
        }`.trim()}
        onClick={device.allowSleep}
      >
        Allow Sleep
      </button>
    </div>
  );
}

export default App;
