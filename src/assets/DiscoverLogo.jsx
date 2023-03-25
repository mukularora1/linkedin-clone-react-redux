import React from "react";

function DiscoverLogo({ width, height, fill }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ width: width, height: height }} fill={fill} focusable="false" className="lazy-loaded" aria-busy="false">
      <path
        d="M18.07 2.93A10 10 0 1 0 3.926 17.07 10 10 0 0 0 18.07 2.93ZM5.34 15.66A8 8 0 1 1 16.66 4.353 8 8 0 0 1 5.34 15.66ZM9 8l-3 7a7 7 0 1 1 9.9-9.9L9 8Zm1.12 2.88a1.24 1.24 0 1 1 1.76-1.747 1.24 1.24 0 0 1-1.76 1.747ZM15.95 15A7 7 0 0 1 6 15l7-3 2.95-6.95a7 7 0 0 1 0 9.95Z"
        fill={fill}></path>
    </svg>
  );
}

export default DiscoverLogo;
