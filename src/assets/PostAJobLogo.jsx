import React from "react";

function PostAJobLogo({ height, width }) {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width={width} height={height} focusable="false">
        <circle cx="12" cy="4" r="2" style={{ isolation: "isolate", opacity: 0.75 }}></circle>
        <path d="M21 10H3a1 1 0 00-1 1v10a1 1 0 001 1h18a1 1 0 001-1V11a1 1 0 00-1-1zm-5 9H8v-2h8v2zm2-4H6v-2h12v2z"></path>
        <g opacity=".6">
          <path d="M9.57 5.75l-2.41 4.83 1.68.84 2.28-4.57a3 3 0 01-1.55-1.1zM14.43 5.75a3 3 0 01-1.55 1.1l2.28 4.57 1.68-.84z" style={{ isolation: "isolate", opacity: 0.55 }}></path>
        </g>
      </svg>
    </>
  );
}

export default PostAJobLogo;
