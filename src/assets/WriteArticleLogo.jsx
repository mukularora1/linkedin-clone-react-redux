import React from "react";

function WriteArticleLogo({ height, width }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        data-supported-dps="24x24"
        fill="currentColor"
        className="mercado-match"
        style={{ fill: "red" }}
        width={width}
        height={height}
        focusable="false">
        <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
      </svg>
    </>
  );
}

export default WriteArticleLogo;
