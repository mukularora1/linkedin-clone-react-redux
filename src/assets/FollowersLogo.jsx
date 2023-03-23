import React from "react";

function FollowersLogo({ width, height }) {
  return (
    <svg aria-hidden="true" className="mr4" xmlns="http://www.w3.org/2000/svg" style={{ width: width, height: height }} viewBox="0 0 24 24" data-supported-dps="24x24" data-test-icon="person-medium">
      <use href="#person-medium" width="24" height="24"></use>
    </svg>
  );
}

export default FollowersLogo;
