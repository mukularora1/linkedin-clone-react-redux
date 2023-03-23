import React from "react";
import "./network.css";
import NetworkLeftOptions from "./NetworkLeftOptions";
function Network() {
  return (
    <>
      <div className="network">
        <div className="network__left">
          <NetworkLeftOptions />
        </div>
        <div className="network__right"></div>
      </div>
    </>
  );
}

export default Network;
